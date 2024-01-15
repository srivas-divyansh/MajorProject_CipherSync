export function Product() {
    const amount = 500;
    const currency = "INR";
    const receiptId = "qwsaql";
    const paymentHandler = async (e) => {
        const response = await fetch("http://localhost:5000/order", {
            method: "POST",
            body: JSON.stringify({
                amount: amount,
                currency: currency,
                receipt: receiptId
        }), headers: {
            "Content-Type": "application/json"
        },
        });
        const order = await response.json();
        console.log(order);
    }
    return (
        <div className="product">
            <h1>Tshirt</h1>
            <button onClick = {paymentHandler}>Pay</button>
        </div>
    );
}