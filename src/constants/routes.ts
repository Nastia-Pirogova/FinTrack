const DASHBOARD = "/dashboard";
const TRANSACTIONS = `${DASHBOARD}/transactions`;

export const ROUTES = {
    DASHBOARD,
    TRANSACTIONS,

    resolveTransaction(id: string) {
        return `${TRANSACTIONS}/${id}`;
    },
};