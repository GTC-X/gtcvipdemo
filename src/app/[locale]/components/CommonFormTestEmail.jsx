"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import OtpInput from "react-otp-input";
import { countryList } from "../context/useCountriesDetails";
import { useLocationDetail } from "../context/useLocationDetail";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Select from "react-select";
import { useTranslations, useLocale } from "next-intl";

const CommonMainFormTestEmailForm = () => {
    const { countryData } = useLocationDetail();
    const [otpLoading, setOtpLoading] = useState(false);
    const [showOtp, setShowOtp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [verifyLoading, setVerifyLoading] = useState(false);
    const [storedOtp, setStoredOtp] = useState("");
    const [isDisable, setIsDisable] = useState(true);
    const router = useRouter();
    const t = useTranslations("demo.form");
    const locale = useLocale();

    const options = useMemo(
        () =>
            countryList.map((item) => ({
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
            })),
        [countryList]
    );

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        formik.setFieldValue("utm_source", params.get("utm_source") || "");
        formik.setFieldValue("utm_medium", params.get("utm_medium") || "");
        formik.setFieldValue("utm_campaign", params.get("utm_campaign") || "");
        formik.setFieldValue("utm_id", params.get("utm_id") || "");
        formik.setFieldValue("utm_term", params.get("utm_term") || "");
        formik.setFieldValue("utm_content", params.get("utm_content") || "");
        formik.setFieldValue("fbclid", params.get("fbclid") || "");
        formik.setFieldValue("gclid", params.get("gclid") || "");
    }, []);

    useEffect(() => {
        if (countryData?.country) {
            const filterData = countryList.find(
                (item) => item?.alpha_2_code === countryData.country
            );
            formik.setFieldValue(
                "country",
                filterData ? filterData?.en_short_name : ""
            );
        }
    }, [countryData?.country]);

    const sendVerificationCode = () => {
        setOtpLoading(true);
        axios
            .post(`/api/otp-smtp`, {
                email: formik?.values?.email,
                first_name: formik?.values?.nickname,
                type: "0",
                locale,
            })
            .then((res) => {
                if (res?.data?.message) {
                    setShowOtp(true);
                    setStoredOtp(res?.data?.message?.slice(4, -3)); // TODO: Move to server-side
                    toast.success(t("otpSent"));
                } else {
                    toast.error(res?.data?.message || t("otpError"));
                    setShowOtp(false);
                }
            })
            .catch((err) => {
                toast.error(t("otpError") + ": " + (err.response?.data?.error || err.message));
                setShowOtp(false);
            })
            .finally(() => {
                setOtpLoading(false);
            });
    };

    const generatePassword = (length = 12) => {
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const number = "0123456789";
        const special = "!@#$%^&*";
        const all = lower + upper + number + special;
        const password = [
            lower[Math.floor(Math.random() * lower.length)],
            upper[Math.floor(Math.random() * upper.length)],
            number[Math.floor(Math.random() * number.length)],
            special[Math.floor(Math.random() * special.length)],
        ];
        for (let i = password.length; i < length; i++) {
            password.push(all[Math.floor(Math.random() * all.length)]);
        }
        return password.sort(() => Math.random() - 0.5).join("");
    };

    const sendDataToDb = async (datas) => {
        const payloadForm = {
            first_name: datas.nickname,
            phone: datas.phone,
            email: datas.email,
            password: datas.password,
            company: "no",
            country: datas.country,
            group: "contest\\AUG25\\STD-USD",
            invest_password: datas.invest_password,
        };
        var data = JSON.stringify({
            "idOrEmail": datas?.email
        });

        var config = {
            method: 'post',
            url: 'https://integration.returning.ai/apis/v1/users/info',
            headers: {
                'Authorization': 'Bearer e4db21c4b58ddedb9366775f9781dd09e53ec432bf84340414534db5ecc2c30f',
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log({ response });
                var config = {
                    method: 'get',
                    url: `https://my.gtcvip.com/api/secureAuth?accessLevel=0&action=login&email=${datas?.email}&userId=${response?.data?.data?.username}`,
                    headers: {
                        'apiKey': '986a17ef6b438923189b193fc09a3f6e86925ad4',
                        'hostname': 'my.gtcvip.com'
                    }
                };

                axios(config)
                    .then(function (res) {
                        const url = (res?.data?.loginUrl || '').replaceAll('undefined', '986a17ef6b438923189b193fc09a3f6e86925ad4');
                        window.open(url, "_blank")
                        console.log(JSON.stringify(res.data));
                        setLoading(false)
                    })
                    .catch(function (error) {
                        toast.error(error || error?.message)
                        console.log(error);
                        setLoading(false)
                    });
            })
            .catch(function (error) {
                setLoading(false)
                setIsDisable(false)
                toast.error(error?.response?.data?.message || error?.message)

                console.log(error);
            });
    };

    const formik = useFormik({
        initialValues: {
            nickname: "",
            email: "",
            last_name: "",
            phone: "",
            password: generatePassword(),
            country: "",
            otp: "",
            terms: false,
            utm_source: "",
            utm_medium: "",
            utm_campaign: "",
            utm_id: "",
            utm_term: "",
            utm_content: "",
            fbclid: "",
            gclid: "",
            invest_password: generatePassword(),
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email(t("errors.emailInvalid"))
                .required(t("errors.emailRequired")),
            otp: Yup.string()
                .length(6, t("errors.otpLength"))
                .required(t("errors.otpRequired")),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                await sendDataToDb(values);
            } catch (error) {
                toast.error(t("submitError") + ": " + (error.response?.data?.error || error.message));
                setLoading(false);
            }
        },
    });

    const verifyOtpCode = async () => {
        setVerifyLoading(true);
        try {
            if (formik.values.otp === storedOtp) {
                toast.success(t("otpSuccess"));
                setShowOtp(false);
                setIsDisable(false);
            } else {
                toast.error(t("otpFail"));
            }
        } finally {
            setVerifyLoading(false);
        }
    };

    return (
        <div className="relative max-w-7xl w-full mx-auto">
            <form
                onSubmit={formik.handleSubmit}
                className="relative text-sm min-w-3xl rounded-3xl md:p-0 mx-auto form-setting ltr:text-left rtl:text-right text-white"
            >
                {/* Hidden UTM Fields */}
                <input type="hidden" name="utm_source" value={formik.values.utm_source} />
                <input type="hidden" name="utm_medium" value={formik.values.utm_medium} />
                <input type="hidden" name="utm_campaign" value={formik.values.utm_campaign} />
                <input type="hidden" name="utm_id" value={formik.values.utm_id} />
                <input type="hidden" name="utm_term" value={formik.values.utm_term} />
                <input type="hidden" name="fbclid" value={formik.values.fbclid} />
                <input type="hidden" name="gclid" value={formik.values.gclid} />
                <input type="hidden" name="utm_content" value={formik.values.utm_content} />


                {/* Email and OTP */}
                <div className="grid grid-cols-1 gap-3 mb-3">
                    <div className="relative">
                        <div className="relative">
                            <div className="text-sm mb-2">
                                <label>{t("email")}</label>
                            </div>
                            <input
                                type="email"
                                aria-label={t("email")}
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
                                className="absolute top-9 bg-primary ltr:right-3 rtl:left-3 rounded-md cursor-pointer text-white py-1.5 px-2"
                                onClick={sendVerificationCode}
                            >
                                {otpLoading ? t("sending") : t("getCode")}
                            </div>
                        </div>
                        {showOtp && (
                            <div className="grid grid-cols-1 gap-2">
                                <div>
                                    <p className="my-2 ltr:text-left rtl:text-right pt-1">{t("otp")}</p>
                                    <OtpInput
                                        value={formik.values.otp}
                                        onChange={(otp) => formik.setFieldValue("otp", otp)}
                                        numInputs={6}
                                        containerStyle={{
                                            justifyContent: "space-around",
                                            alignItems: "center",
                                            gap: "10px",
                                        }}
                                        renderInput={(props, index) => (
                                            <input
                                                {...props}
                                                type="tel"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                aria-label={`OTP digit ${index + 1}`}
                                                style={{
                                                    fontSize: "16px",
                                                    borderRadius: "5px",
                                                    padding: "10px",
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
                                        )}
                                    />
                                    {formik.touched.otp && formik.errors.otp && (
                                        <p className="text-red-500 text-sm mt-2">{formik.errors.otp}</p>
                                    )}
                                </div>
                                <div
                                    className="bg-primary right-0 rounded-md cursor-pointer text-white py-2 px-2 text-center mt-2 border border-[#ffffff1a]"
                                    onClick={verifyLoading ? null : verifyOtpCode}
                                >
                                    {verifyLoading ? t("verifying") : t("verifyCode")}
                                </div>
                            </div>
                        )}
                    </div>
                </div>




                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-white cursor-pointer mb-10 text-[#000032] text-base md:text-lg w-full font-semibold py-4 px-8 rounded-xl border border-[#ffffff1a]"
                    >
                        {loading ? t("submitting") : t("submit")}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommonMainFormTestEmailForm;