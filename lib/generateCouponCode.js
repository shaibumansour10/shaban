export function generateCouponCode(title, ExpiryDate) {
  // Step 1: Convert title to uppercase and replace spaces with hyphens
  const formattedTitle = title.toUpperCase().replace(/\s+/g,'');
  
  // Step 2: Handle date formatting
  let formattedDate = '';
  
  // Check if the ExpiryDate is in MM/DD/YYYY format
  if (ExpiryDate.includes('/')) {
      // Split MM/DD/YYYY format
      const [month, day, year] = ExpiryDate.split('/');
      formattedDate = `${day}${month}${year}`;
  }
  // Check if the ExpiryDate is in YYYY-MM-DD format (ISO format)
  else if (ExpiryDate.includes('-')) {
      // Split YYYY-MM-DD format
      const [year, month, day] = ExpiryDate.split('-');
      formattedDate = `${day}${month}${year}`;
  } else {
      // Fallback if the date format is unexpected
      console.error('Invalid date format');
      formattedDate = '00000000'; // Default invalid date code
  }
  
  // Step 3: Combine formatted title and formatted date to create the coupon code
  return `${formattedTitle}-${formattedDate}`;
}
