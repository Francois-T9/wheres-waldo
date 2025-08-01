import Icon from "@mdi/react";
import { mdiEmail, mdiGithub, mdiLinkedin } from "@mdi/js";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside className="h-full flex items-end justify-end">
        <p>François Thullier 2025</p>
      </aside>
      <nav>
        <h6 className="footer-title">Socials</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/francois-thullier/"
            target="_blank"
          >
            <Icon path={mdiLinkedin} size={1.5} />
          </a>
          <a href="https://github.com/Francois-T9" target="_blank">
            <Icon path={mdiGithub} size={1.5} />
          </a>
          <a href="mailto:francois.thullier98@gmail.com">
            <Icon path={mdiEmail} size={1.5} />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
