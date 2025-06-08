import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";

@Injectable()
export class BunnyService {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "https://storage.bunnycdn.com", // BunnyCDN base URL
      headers: {
        AccessKey: "YOUR_ACCESS_KEY", // Replace with your BunnyCDN API key
      },
    });
  }

  /**
   * Upload a file to BunnyCDN storage.
   * @param storageZoneName The name of the BunnyCDN storage zone.
   * @param filePath The file path in the storage zone.
   * @param fileContent The content of the file to upload.
   */
  async uploadFile(
    storageZoneName: string,
    filePath: string,
    fileContent: Buffer
  ): Promise<any> {
    try {
      const response = await this.axiosClient.put(
        `/${storageZoneName}/${filePath}`,
        fileContent,
        {
          headers: {
            "Content-Type": "application/octet-stream",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to upload file: ${error.message}`);
    }
  }

  /**
   * Delete a file from BunnyCDN storage.
   * @param storageZoneName The name of the BunnyCDN storage zone.
   * @param filePath The file path in the storage zone.
   */
  async deleteFile(storageZoneName: string, filePath: string): Promise<any> {
    try {
      const response = await this.axiosClient.delete(
        `/${storageZoneName}/${filePath}`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  }

  /**
   * List files in a BunnyCDN storage zone.
   * @param storageZoneName The name of the BunnyCDN storage zone.
   * @param directoryPath The directory path to list files from.
   */
  async listFiles(
    storageZoneName: string,
    directoryPath: string
  ): Promise<any> {
    try {
      const response = await this.axiosClient.get(
        `/${storageZoneName}/${directoryPath}`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to list files: ${error.message}`);
    }
  }
}
