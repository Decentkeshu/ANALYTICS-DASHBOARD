const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
console.log("BASE_URL:", BASE_URL);
export const createuser = async(user, email, password, cpassword) => {
    const response = await fetch(`${BASE_URL}/api/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({ user, email, password, cpassword }), 
    });
    const data = await response.json();
    return { status: response.status, data }; 
}

export const loggedinuser = async(identifier, password) => {
    const response = await fetch(`${BASE_URL}/api/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password })
    });
    const data = await response.json()
    return { status: response.status, data }
}


export const getstats = async () => {
    const response = await fetch(`${BASE_URL}/api/dashboard/stats`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getorders = async () => {
    const response = await fetch(`${BASE_URL}/api/dashboard/orders`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getproducts = async () => {
    const response = await fetch(`${BASE_URL}/api/dashboard/products`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getrevenue = async () => {
    const response = await fetch(`${BASE_URL}/api/dashboard/revenue`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getcategories = async () => {
    const response = await fetch(`${BASE_URL}/api/dashboard/categories`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getStatecard = async () => {
    const response = await fetch(`${BASE_URL}/api/analytics/statecard`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getTotalOverview = async () => {
    const response = await fetch(`${BASE_URL}/api/analytics/totaloverview`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getDeviceBreakdown = async () => {
    const response = await fetch(`${BASE_URL}/api/analytics/device`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getPageViews = async () => {
    const response = await fetch(`${BASE_URL}/api/analytics/pageviews`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getTraffic = async () => {
    const response = await fetch(`${BASE_URL}/api/analytics/traffic`);
    const data = await response.json();
    return { status: response.status, data };
};

// User Dashboard APIs

export const getUserStats = async () => {
    const response = await fetch(`${BASE_URL}/api/users/userstats`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getUsersOverTime = async () => {
    const response = await fetch(`${BASE_URL}/api/users/usersovertime`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getCountryData = async () => {
    const response = await fetch(`${BASE_URL}/api/users/countrydata`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getUserGrowth = async () => {
    const response = await fetch(`${BASE_URL}/api/users/usergrowth`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getRetentionChurn = async () => {
    const response = await fetch(`${BASE_URL}/api/users/retentionchurn`);
    const data = await response.json();
    return { status: response.status, data };
};


export const getRevenueStats = async () => {
    const response = await fetch(`${BASE_URL}/api/revenue/revenuestats`);
    const data = await response.json();
    return { status: response.status, data };
};


/**
 * 📈 Monthly Revenue (MRR Chart)
 */
export const getMrrData = async () => {
    const response = await fetch(`${BASE_URL}/api/revenue/mrrdata`);
    const data = await response.json();
    return { status: response.status, data };
};


/**
 * 📦 Revenue Breakdown Stats
 */
export const getRevenueBreakdown = async () => {
    const response = await fetch(`${BASE_URL}/api/revenue/rstats`);
    const data = await response.json();
    return { status: response.status, data };
};


/**
 * 📉 Churn Data (RAW VALUES — NOT PERCENTAGE ⚠️)
 * IMPORTANT: churnRate is a numeric value, not %
 */
export const getRevenueChurn = async () => {
    const response = await fetch(`${BASE_URL}/api/revenue/churndata`);
    const data = await response.json();

    // Safety normalization (prevents frontend mistakes later)
    const normalized = data?.data?.map((item) => ({
        ...item,
        churnRate: Number(item.churnRate), // ensure numeric only
    }));

    return {
        status: response.status,
        data: {
            ...data,
            data: normalized,
        },
    };
};

export const getReportsStatus = async () => {
    const response = await fetch(`${BASE_URL}/api/reports/status`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getReportsStats = async () => {
    const response = await fetch(`${BASE_URL}/api/reports/reportsstats`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getExports = async () => {
    const response = await fetch(`${BASE_URL}/api/reports/exports`);
    const data = await response.json();
    return { status: response.status, data };
};

export const getCompanyData = async () => {
    const response = await fetch(`${BASE_URL}/api/reports/companydata`);
    const data = await response.json();
    return { status: response.status, data };
};