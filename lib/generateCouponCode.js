function generateCouponCode(title, expiryDate) {
    // Step 1: Convert title to uppercase and replace spaces with hyphens
    const formattedTitle = title.toUpperCase().replace(/\s+/g, '-');
    
    // Step 2: Format the date (assuming the input date is in MM/DD/YYYY format)
    const [month, day, year] = expiryDate.split('/');
    const formattedDate = `${day}${month}${year}`;
    
    // Step 3: Combine formatted title and formatted date to create the coupon code
    return `${formattedTitle}-${formattedDate}`;
  }