export const formatNumber = (num) => {
  return Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(num);
};

export const formatFileSize = (size) => {
  let i = Math.floor(Math.log(size) / Math.log(1024));
  return `${(size / Math.pow(1024, i)).toFixed(1)} ${['B', 'KB', 'MB', 'GB', 'TB'][i]}`;
};

// You can add more formatting functions here
export const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
};
