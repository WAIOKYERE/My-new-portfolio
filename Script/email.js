
function sendMail(event) {
    // Prevent form from refreshing the page
    event.preventDefault();
  
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_6uydfyd";
    const templateID = "template_2gbimck";
  
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        // Clear the input fields after success
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
  
        alert("Your message has been delivered successfully!");
      })
      .catch((err) => {
        console.log("Failed to send email:", err);
        alert("Failed to send your message. Please try again later.");
      });
  }
