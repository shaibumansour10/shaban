export function generateUserCode(prefix, fullName) {
    
    // Step 1: Generate initials from full name
    const initials = fullName
      .split(' ')  // Split the full name by spaces
      .map(name => name.charAt(0).toUpperCase())  // Get the first character of each part
      .join('');  // Join the initials together
  
    // Step 2: Get the current time in the format HHMMSSsss (hours, minutes, seconds, milliseconds)
    const now = new Date();
    const year = now.getFullYear();  // Get the current year (e.g., 2024)
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');  // Ensure 2 digits for hours
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');  // Ensure 3 digits for milliseconds
  
    // Step 3: Create the time code
    const timeCode = `${year}${month}${hours}${minutes}${seconds}${milliseconds}`;
  
    // Step 4: Combine prefix, initials, and time code to form the final user code
    const userCode = `${prefix}-${initials}-${timeCode}`;
  
    return userCode;
  }