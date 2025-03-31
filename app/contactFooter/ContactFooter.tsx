export const ContactFooter = () => {
  return (
    <footer id="kontakt" className={`w-full flex justify-center`}>
      <div className={`w-[72rem] my-20 px-5 flex justify-between`}>
        <div>
          <h1 className={`font-bold text-2xl`}>Kontakt</h1>
        </div>
        <div>
          <h1 className={`font-bold text-2xl`}>Social Media</h1>
        </div>
        <div className={`rounded-2xl`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.8675747537377!2d17.87592417666777!3d52.300257972004374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704c61a8f4f1b33%3A0xc0ea3583aa958fc5!2sTraugutta%2057%2C%2062-400%20S%C5%82upca!5e0!3m2!1spl!2spl!4v1743376408569!5m2!1spl!2spl"
            loading="lazy"
            className={`h-[20rem] w-[32rem] rounded-2xl border border-gray-100 shadow-lg`}
          ></iframe>
        </div>
      </div>
    </footer>
  );
};
