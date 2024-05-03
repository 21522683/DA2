export default function formatMoney(amount) {

    amount = parseInt(amount);
    if (isNaN(amount)) {
        return "Số không hợp lệ";
    }
    let formattedAmount = amount.toLocaleString('vi-VN');

    formattedAmount += " VND";

    return formattedAmount;
}

