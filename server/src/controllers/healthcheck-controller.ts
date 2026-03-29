import { ApiResponse } from "../utils/api-response";

const healthCheck = (req: any, res: any) => {
    try {
        
        const response = new ApiResponse(200, "Server is healthy", { uptime: process.uptime() });
        res.status(response.statusCode).json(response);
    } catch (error) {
        
    }
}

export { healthCheck };