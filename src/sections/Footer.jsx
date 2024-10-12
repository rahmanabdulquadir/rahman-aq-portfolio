const Footer = () => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  return (
    <div className="text-center slate  p-5">
      <div>
        <h3 className="text-md font-sora">
          Built and designed by Rahman Abdul Quadir.
        </h3>
        <h4 className="text-sm font-sora">All rights reserved.© {currentYear}</h4>
      </div>
    </div>
  );
};

export default Footer;
