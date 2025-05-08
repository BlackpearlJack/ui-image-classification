import { Results } from "@/config/type";

// API URL set in the environment variable `NEXT_PUBLIC_CLASSIFY_API_URL`
const serviceUrl = process.env.NEXT_PUBLIC_CLASSIFY_API_URL;

// Check if the service URL is defined, if not, throw an error.
if (!serviceUrl) {
  throw new Error(
    "NEXT_CLASSIFY_API_URL is not defined. Please set it in your environment variables."
  );
}

/**
 * Function to classify an image using the classification service.
 * @param {File} image - The image file to classify.
 * @returns {Promise<Results>} - A promise that resolves to the classification results.
 */

export async function classifyImage(image: File): Promise<Results> {
  if (!(image instanceof File)) {
    throw new Error("Invalid image file");
  }

  // Create a temporary image path for preview
  const imagePath = URL.createObjectURL(image);
  // Convert the image to a base64 string
  const imagebase64 = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(image); // Read the file as a data URL
  });

  // Strip the base64 prefix (e.g., "data:image/jpeg;base64,") if it exists
  const base64Data = imagebase64.split(",")[1];

  const formData = new FormData();
  formData.append("image_data", base64Data); // Append the cleaned base64 string to FormData

  try {
    const response = await fetch(`${serviceUrl}/classify_image`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data || !data[0] || !data[0].class) {
      throw new Error("Invalid response from classification service");
    }

    // Extract the identified player name from the response
    const name = data[0].class;

    // Map probabilities to class names using the class dictionary
    const probabilities = Object.entries(data[0].class_dictionary).map(([className, index]) => ({
      class: className,
      probability: data[0].class_probability[Number(index)], // Convert index to a number
    }));

    console.log("Probabilities:", probabilities); // Log the probabilities for debugging
    return {
      image: imagePath, // Use the temporary image path for preview
      message: `The celebrity is: ${name}`, // Return the identified class as the message
      probabilities, // Include the probabilities in the result
    };
  } catch (error) {
    console.error("Error classifying image:", error);
    throw new Error("Failed to classify image. Please try again later.");
  }
}
