

const API_URL = "https://29ue2rd1z3.execute-api.us-east-1.amazonaws.com/register";

async function registerStudent() {

    // Get values from form
    const name = document.getElementById("name").value.trim();
    const branch = document.getElementById("branch").value.trim();
    const cgpa = document.getElementById("cgpa").value.trim();

    // Validation
    if (!name || !branch || !cgpa) {
        alert("Please fill all fields.");
        return;
    }

    const student = {
        name: name,
        branch: branch,
        cgpa: cgpa
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);

            // Clear form
            document.getElementById("name").value = "";
            document.getElementById("branch").value = "";
            document.getElementById("cgpa").value = "";
        } else {
            alert(result.error || "Registration failed.");
        }

    } catch (error) {
        console.error(error);
        alert("Unable to connect to the server.");
    }
}