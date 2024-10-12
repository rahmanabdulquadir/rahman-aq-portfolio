const Footer = () => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  return (
    <div className="text-center mt-12">
      <div className="p-5 ">
        <h3 className="text-sm font-sora">
          Built and designed by Rahman Abdul Quadir.
        </h3>
        <h4 className="text-xs font-sora">All rights reserved.© {currentYear}</h4>
      </div>
    </div>
  );
};

export default Footer;
