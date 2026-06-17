export function formatDate(date)  {
    const d = date
        ? new Date(date).toLocaleDateString()
        : "N/A";
    return d;
}