"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import OtpInput from "react-otp-input";
import { countryList } from "../context/useCountriesDetails";
import { useLocationDetail } from "../context/useLocationDetail";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Select from "react-select";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl"; // make sure this is imported

const ReregistrationForm = () => {
    const { countryData } = useLocationDetail();
    const [otpLoading, setOtpLoading] = useState(false);
    const [showOtp, setShowOtp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [storedOtp, setStoredOtp] = useState("");
    const [isDisable, setIsDisable] = useState(true);
    const router = useRouter();
    const t = useTranslations("demo.form");
    const locale = useLocale(); // inside your component
    const options = countryList.map((item) => ({
        value: item.en_short_name,
        label: (
            <div className="flex items-center gap-2">
                <img
                    src={`https://flagcdn.com/w40/${item.alpha_2_code.toLowerCase()}.png`}
                    alt={item.en_short_name}
                    className="w-5 h-4 object-cover"
                />
                <span>{item.en_short_name}</span>
            </div>
        ),
    }));

    useEffect(() => {
        if (countryData?.country) {
            const filterData = countryList.find(
                (item) => item?.alpha_2_code == countryData.country
            );
            formik.setFieldValue(
                "country",
                filterData ? filterData?.en_short_name : ""
            );
        }
    }, [countryData?.country, countryList]);

    const sendVerificationCode = () => {
        setOtpLoading(true);
        axios
            .post(`/api/otp-smtp`, {
                email: formik?.values?.email,
                first_name: formik?.values?.nickname,
                type: "0",
                locale: locale
            })
            .then((res) => {
                if (res?.data?.message) {
                    setShowOtp(true);
                    setStoredOtp(res?.data?.message?.slice(4, -3));
                    toast.success(t("otpSent"));
                } else {
                    toast.error(res?.data?.message);
                    setShowOtp(false);
                }
            })
            .catch((err) => {
                setShowOtp(false);
            })
            .finally(() => {
                setOtpLoading(false);
            });
    };

    const generatePassword = (length = 12) => {
        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        return Array.from(
            { length },
            () => chars[Math.floor(Math.random() * chars.length)]
        ).join("");
    };

    const sendDataToDb = async (data) => {
        const emailData = axios
            .post(`/api/re-registration`, JSON.stringify({ ...data, locale: locale }))
            .then((res) => {
                toast.success(t("thankYou1"));
                formik.resetForm();
                setLoading(false);
                localStorage.setItem("user", JSON.stringify(data));
                // Redirect based on locale
                const targetLocale =
                    locale === "ar" ? "/ar/5k-demo-trading-competition/success" :
                    locale === "cn" ? "/cn/5k-demo-trading-competition/success" :
                    locale === "ru" ? "/ru/5k-demo-trading-competition/success" :
                    locale === "vi" ? "/vi/5k-demo-trading-competition/success" :
                    locale === "es" ? "/es/5k-demo-trading-competition/success" :
                    locale === "pt" ? "/pt/5k-demo-trading-competition/success" :
                    "/5k-demo-trading-competition/success";
                router.push(targetLocale);
                formik.resetForm();
                setShowOtp(false);
            })
            .catch((err) => {
                toast.error("Error inserting data: " + result.error);
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const formik = useFormik({
        initialValues: {
            nickname: "",
            email: "",
            last_name: "",
 
        },
        validationSchema: Yup.object({
            nickname: Yup.string()
                .matches(/^[A-Za-z\s]+$/, t("errors.fullNameFormat"))
                .required(t("errors.firstNameRequired")),

            last_name: Yup.string()
                .matches(/^[A-Za-z\s]+$/, t("errors.lastNameFormat"))
                .required(t("errors.lastNameRequired")),

            email: Yup.string()
                .email(t("errors.emailInvalid"))
                .required(t("errors.emailRequired")),

          
        }),

        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.post(
                    "https://hooks.zapier.com/hooks/catch/16420445/utnxylg/",
                    JSON.stringify(values)
                );
            } catch (error) {
            } finally {
                sendDataToDb(values, formik, setLoading);
            }
        },
    });

    const verifyOtpCode = async () => {
        if (formik.values.otp == storedOtp) {
            toast.success(t("otpSuccess"));
            setShowOtp(false);
            setIsDisable(false);
        } else {
            toast.error(t("otpFail"));
        }
    };

    //console.log({ countryList, countryData, formik })

    return (
        <div className="relative max-w-xl mx-auto">
            <form
                onSubmit={formik.handleSubmit}
                className="relative text-sm rounded-3xl md:p-0 mx-auto form-setting ltr:text-left rtl:text-right text-white"
            >
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
               
                    <div className="relative">
                        <div className="text-sm mb-2">
                            <label>{t("firstName")}</label>
                        </div>

                        <input
                            type="text"
                            inputMode="text"
                            autoComplete="off"
                            className={`w-full px-4 bg-[#1A1A47] py-3 pl-3 text-base border-[.5px] rounded-md border-opacity-10  ${formik.touched.nickname && formik.errors.nickname
                                ? "border-red-500"
                                : " border-[#ffffff1a] "
                                } focus:outline-none`}
                            {...formik.getFieldProps("nickname")}
                        />
                        {formik.touched.nickname && formik.errors.nickname && (
                            <p className="text-red-500 ltr:text-left rtl:text-right pt-1">
                                {formik.errors.nickname}
                            </p>
                        )}
                    </div>
                    <div className="relative">
                        <div className="text-sm mb-2">
                            <label>{t("lastName")}</label>
                        </div>

                        <input
                            type="text"
                            inputMode="text"
                            autoComplete="off"
                            className={`w-full px-4 bg-[#1A1A47] text-base py-3 pl-3 border-[.5px] rounded-md border-opacity-10  ${formik.touched.last_name && formik.errors.last_name
                                ? "border-red-500"
                                : " border-[#ffffff1a] "
                                } focus:outline-none`}
                            {...formik.getFieldProps("last_name")}
                        />
                        {formik.touched.last_name && formik.errors.last_name && (
                            <p className="text-red-500  pt-1 ltr:text-left rtl:text-right">
                                {formik.errors.last_name}
                            </p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-3 mb-3">
                    <div className="relative">
                        <div className="relative">
                            <div className="text-sm mb-2">
                                <label>{t("email")}</label>
                            </div>

                            <input
                                type="email"
                                className={`w-full bg-[#1A1A47] px-4 py-3 pl-3 text-base border-[.5px] border-[#ccccd679] rounded-md border-opacity-30 ${formik.touched.email && formik.errors.email
                                    ? "border-red-500"
                                    : "border-[#ffffff1a]"
                                    } focus:outline-none focus:bg-none`}
                                {...formik.getFieldProps("email")}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 pt-1 ltr:text-left rtl:text-right">
                                    {formik.errors.email}
                                </p>
                            )}
                            <div
                                className="absolute top-9 bg-primary ltr:right-3 rtl:left-3 rounded-md cursor-pointer text-white  py-1.5 px-2"
                                onClick={() => {
                                    sendVerificationCode();
                                }}
                            >
                                {otpLoading ? t("sending") : t("getCode")}
                            </div>
                        </div>
                        {showOtp && (
                            <div className="grid grid-cols-1 gap-2">
                                <div>
                                    <p className="my-2 ltr:text-left rtl:text-right pt-1">
                                        {t("otp")}
                                    </p>
                                    <OtpInput
                                        value={formik.values.otp}
                                        onChange={(otp) => formik.setFieldValue("otp", otp)}
                                        numInputs={6}
                                        containerStyle={{
                                            justifyContent: "space-around",
                                            alignItems: "center",
                                            gap: "10px",
                                        }}
                                        renderInput={(props) => (
                                            <input
                                                {...props}
                                                type="tel" // Triggers number pad
                                                inputMode="numeric" // Helps mobile keyboard detect numeric input
                                                pattern="[0-9]*" // Optional: enforce numeric
                                            />
                                        )}
                                        isInputNum
                                        inputStyle={{
                                            fontSize: "16px", // ✅ critical to stop iOS zoom
                                            borderRadius: "5px",
                                            paddingBottom: "10px",
                                            paddingTop: "10px",
                                            width: "20%",
                                            backgroundColor: "#1A1A47",
                                            color: "#fff",
                                            fontWeight: "700",
                                            outlineColor: "#f9c617",
                                            border:
                                                formik.touched.otp && formik.errors.otp
                                                    ? "1px solid red"
                                                    : "1px solid #ffffff1a",
                                        }}
                                    />
                                    {formik.touched.otp && formik.errors.otp && (
                                        <p className="text-red-500 text-sm mt-2">
                                            {formik.errors.otp}
                                        </p>
                                    )}
                                </div>
                                <div
                                    className=" bg-primary right-0 rounded-md cursor-pointer text-white  py-2 px-2 text-center mt-2 border border-[#ffffff1a]"
                                    onClick={() => {
                                        verifyOtpCode();
                                    }}
                                >
                                    {t("verifyCode")}
                                </div>
                            </div>
                        )}
                    </div>
         
                </div>



                {/* Submit Button */}
                <div className="text-center mt-5">
                    <button
                        disabled={isDisable}
                        type="submit"
                        className="bg-secondary cursor-pointer mb-10 text-white w-full font-bold py-4 px-8 rounded-md border border-[#ffffff1a]"
                    >
                        {loading ? t("submitting") : t("submit")}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReregistrationForm