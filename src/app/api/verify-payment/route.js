export async function POST(req) {

  try {
    // Parse webhook payload
    const { order_status } = await req.json();

    // Validate payload (optional)
    if (!order_status) {


      // Handle different order statuses
      if (order_status === "PAID") {

        console.log(`Order ${order_id} marked as PAID`);

      } else if (order_status === "FAILED") {

        console.log(`Order ${order_id} marked as FAILED`);

      } else if (order_status === "PENDING") {

        console.log(`Order ${order_id} is still PENDING`);

      }
    }

    return new Response(
      JSON.stringify({ message: "Webhook processed successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling webhook:", error.message);

    return new Response(
      JSON.stringify({ message: "Webhook processing failed", error: error.message }),
      { status: 500 }
    );
  }
}
