async function submitContactForm(formData) {
    try {
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
  
      const data = await response.json();
      return { status: response.status, message: data.message };
  
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong!");
    }
  }
  
  export default { submitContactForm };