"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import OtpInput from "react-otp-input";
import { countryList } from "../../../context/useCountriesDetails";
import { useLocationDetail } from "../../../context/useLocationDetail";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Select from "react-select";
import { useTranslations, useLocale } from "next-intl";

const DepositFormNew = () => {
    const { countryData } = useLocationDetail();
    const [otpLoading, setOtpLoading] = useState(false);
    const [showOtp, setShowOtp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [verifyLoading, setVerifyLoading] = useState(false);
    const [storedOtp, setStoredOtp] = useState("");
    const [isDisable, setIsDisable] = useState(true);
    const router = useRouter();
    const t = useTranslations("MarginContent.form");
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
        formik.setFieldValue("language", locale || "");
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
            .post(`/api/deposit-otp`, {
                email: formik.values.email,
                first_name: formik.values.nickname,
                type: "0",
                locale,
            })
            .then((res) => {
                if (res?.data?.message) {
                    setShowOtp(true);
                    setStoredOtp(res?.data?.message?.slice(4, -3));
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

    const sendEmail = async (data) => {
        try {
            const mailRes = await axios.post(`/api/email-deposit`, {
                account_no: data.account_no,
                phone: data.phone,
                email: data.email,
                locale: locale,
            });

            toast.success(mailRes?.data?.message);
            toast.success(t("thankYou1"));
            formik.resetForm();
            setShowOtp(false);
        } catch (err) {
            toast.error(t("submitError") + ": " + (err.response?.data?.error || err.message));
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            account_no: "",
        },
        validationSchema: Yup.object({
            account_no: Yup.string()
                .required(t("errors.accountRequired"))
                .matches(/^\d+$/, t("errors.accountNumeric"))
                .min(8, t("errors.accountMinLength", { min: 8 }))
                .max(15, t("errors.accountMinLength", { max: 15 })),
            email: Yup.string()
                .email(t("errors.emailInvalid"))
                .matches(
                    /^[^\+]+@[^\+]+\.[^\+]+$/,
                    t("errors.emailInvalid")
                )
                .required(t("errors.emailRequired")),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                await sendEmail(values);
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
        <div className="relative max-w-xl mx-auto">
            <form
                onSubmit={formik.handleSubmit}
                className="relative text-sm rounded-3xl md:p-0 mx-auto form-setting ltr:text-left rtl:text-right text-[#1A1A47]"
            >
                {/* Account Number */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-3 mb-3">
                    <div className="relative">
                        <div className="text-sm mb-2">
                            <label>{t("accountNo")}</label>
                        </div>
                        <input
                            type="text"
                            inputMode="numeric" // Changed to numeric for better mobile input
                            autoComplete="off"
                            aria-label={t("accountNo")}
                            className={`w-full px-4 bg-[#fff] text-[#1A1A47] text-base py-3 pl-3 border-[.5px] rounded-md border-opacity-10 ${formik.touched.account_no && formik.errors.account_no
                                ? "border-red-500"
                                : "border-[#000]"
                                } focus:outline-none`}
                            {...formik.getFieldProps("account_no")}
                        />
                        {formik.touched.account_no && formik.errors.account_no && (
                            <p className="text-red-500 pt-1 ltr:text-left rtl:text-right">
                                {formik.errors.account_no}
                            </p>
                        )}
                    </div>
                </div>

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
                                className={`w-full bg-[#fff] px-4 py-3 pl-3 text-base border-[.5px] border-[#ccccd679] rounded-md border-opacity-30 ${formik.touched.email && formik.errors.email
                                    ? "border-red-500"
                                    : "border-[#000]"
                                    } focus:outline-none focus:bg-none`}
                                {...formik.getFieldProps("email")}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 pt-1 ltr:text-left rtl:text-right">
                                    {formik.errors.email}
                                </p>
                            )}
                            <div
                                className={`absolute top-9 bg-primary ltr:right-3 rtl:left-3 rounded-md text-white py-1.5 px-2 ${formik.touched.email && formik.errors.email
                                    ? "cursor-not-allowed bg-gray-500"
                                    : "cursor-pointer"
                                    }`}
                                onClick={
                                    formik.touched.email && !formik.errors.email
                                        ? sendVerificationCode
                                        : undefined
                                }
                                disabled={formik.touched.email && formik.errors.email}
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
                                                    backgroundColor: "#fff",
                                                    color: "#1A1A47",
                                                    fontWeight: "700",
                                                    outlineColor: "#000",
                                                    border:
                                                        formik.touched.otp && formik.errors.otp
                                                            ? "1px solid red"
                                                            : "1px solid #000",
                                                }}
                                            />
                                        )}
                                    />
                                    {formik.touched.otp && formik.errors.otp && (
                                        <p className="text-red-500 text-sm mt-2">{formik.errors.otp}</p>
                                    )}
                                </div>
                                <div
                                    className="bg-[#1A1A47] right-0 rounded-md cursor-pointer text-white py-2 px-2 text-center mt-2 border border-[#ffffff1a]"
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
                        disabled={isDisable || loading}
                        type="submit"
                        className="bg-[#1A1A47] cursor-pointer mt-5 text-[#fff] text-base md:text-lg w-full font-semibold py-4 px-8 rounded-xl border border-[#ffffff1a]"
                    >
                        {loading ? t("submitting") : t("submit")}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DepositFormNew;