const apiBaseURL = process.env.BASE_API_URL || "";

export const CART_ENDPOINT = `${apiBaseURL}/api/cart`;
export const SCALAPAY_V2_ORDER = `${apiBaseURL}/api/external/scalapay`;
