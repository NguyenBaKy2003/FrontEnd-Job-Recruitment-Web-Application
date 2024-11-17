import PropTypes from "prop-types";
function Card({ userName = "Nguyen Ba Ky", post = "Software Enginner" }) {
  //   console.log(userName, post);

  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msKEy.img"
          alt="Sarah Dayan's profile"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that Ive seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{userName}</div>
            <div className="text-slate-700 dark:text-slate-500">{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
Card.propTypes = {
  userName: PropTypes.string.isRequired, // Ensures userName is a required string
  post: PropTypes.string.isRequired,
};
export default Card;
