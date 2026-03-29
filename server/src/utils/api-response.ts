// ✅ This interface defines the SHAPE of your API response (for TypeScript safety)
interface IApiResponse {
    statusCode: number;   // HTTP status code (200, 400, etc.)
    message: string;      // Message for frontend (success / error info)
    data: any;            // Actual data (products, user, etc.)
    success: boolean;     // true or false based on status
}

// ✅ This class is used to CREATE the response object
class ApiResponse implements IApiResponse {
    statusCode: number;
    message: string;
    data: any;
    success: boolean;

    // ✅ Constructor runs when you do: new ApiResponse(...)
    constructor(statusCode: number, message: string, data: any = null) {

        // 📌 Assign values
        this.statusCode = statusCode;   // ex: 200, 201, 400
        this.message = message;         // ex: "Products fetched"
        this.data = data;               // ex: products array

        // ✅ Logic: if statusCode < 400 → success = true
        // ❌ if >= 400 → false
        this.success = statusCode < 400;
    }
}

// ✅ Export so you can use it in controllers
export { ApiResponse };