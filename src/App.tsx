import { useRef, useState } from "react";
import "./App.css";
import { APLogo, CzechFlag } from "./assets/icons";
import HamburgerButton from "./components/hamburgerButton";
import GitHubIcon from "./images/github-mark-white.png";
import Hero1 from "./images/heroParallax/Hero-1.png";
import Hero2 from "./images/heroParallax/Hero-2.png";
import Hero3 from "./images/heroParallax/Hero-3.png";
import Hero4 from "./images/heroParallax/Hero-4.png";
import Hero5 from "./images/heroParallax/Hero-5.png";
import Hero6 from "./images/heroParallax/Hero-6.png";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

function App() {
  const [hideHeaderText, setHideHeaderText] = useState(false);

  const pageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest !== 0) {
      setHideHeaderText(true);
    }
    if (latest === 0) {
      setHideHeaderText(false);
    }
  });

  const hero1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const hero2 = useTransform(scrollYProgress, [0, 1], ["0%", "130%"]);
  const hero3 = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const hero4 = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);
  const hero5 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <div ref={pageRef}>
        <nav className="navbar">
          <div className="container">
            <HamburgerButton />
            <span className="navbar_logo">
              <APLogo />
              <p>Adam Code</p>
            </span>
            <ul className="navbar_links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#test">About Me</a>
              </li>
              <li>My Skillz</li>
              <li>My Projects</li>
              <li>Contact</li>
              <img
                src={GitHubIcon}
                style={{
                  width: "25px",
                  height: "25px",
                  paddingTop: "1.5px",
                  marginRight: "26px",
                  marginLeft: "20px",
                }}
              />
              <span style={{ marginRight: "20px" }}>
                <CzechFlag />
              </span>
            </ul>
          </div>
        </nav>
        <div className="container hero_img-container">
          <motion.img
            src={Hero1}
            style={{ y: hero1, translateY: "-80px", zIndex: 0 }}
          />
          <p
            className={
              hideHeaderText
                ? "parallax-text parallax-text_hide"
                : "parallax-text"
            }
          >
            Hello World
          </p>
          <motion.img src={Hero2} style={{ y: hero2, translateY: "30px" }} />
          <motion.img
            src={Hero3}
            style={{ y: hero3, translateY: "20px" }}
            className="instet"
          />
          <motion.img src={Hero4} style={{ y: hero4, translateY: "10px" }} />
          <motion.img src={Hero5} style={{ y: hero5 }} />
          <motion.img src={Hero6} />
        </div>
      </div>
      <div className="container">
        <div style={{ fontSize: 60 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          placeat, laboriosam error maiores in recusandae aperiam molestiae
          ipsum sed adipisci est obcaecati explicabo, ullam ipsa officiis sint
          numquam, repellendus pariatur consequuntur consectetur sit optio
          possimus aliquam cumque. E xpedita voluptate obcaecati consequuntur
          voluptatibus dolorem error, incidunt officiis quo officia non itaque,
          eius nulla eligendi quod. A fugit ex, nesciunt explicabo ipsam id
          incidunt dolor obcaecati porro? Ipsum expedita inventore minus
          exercitationem facere illum dolorum iusto eligendi cumque, dolorem
          veniam aspernatur pariatur tempore debitis quibusdam voluptatum
          assumenda recusandae modi dolores adipisci, mollitia temporibus
          reprehenderit? Porro animi ullam veritatis reprehenderit beatae, aut
          ut vel voluptas commodi mollitia et molestiae atque odit temporibus
          praesentium ex, corporis quaerat impedit culpa. Quam, architecto
          consequatur nisi eaque nesciunt nam quaerat deserunt ab harum dolorum,
          nulla dolor quidem quasi nostrum sed, voluptatem rem exercitationem
          odit corrupti officiis iste sit. Architecto possimus obcaecati quae
          veritatis at, doloremque aliquam facere natus voluptatibus omnis animi
          laboriosam ipsum eos libero atque nesciunt sint inventore assumenda
          illo, nostrum, commodi tenetur. Doloremque, temporibus optio minima,
          quia sint ea culpa sed exercitationem voluptates dignissimos nam iusto
          voluptatem dicta laborum quis velit amet. Sit illum maxime facilis
          quisquam magnam aut blanditiis accusantium iste laborum qui tenetur
          ipsum suscipit nihil nemo, alias dolores itaque consequuntur fugit,
          sed asperiores exercitationem possimus quaerat, dolore quae? Nulla
          saepe ipsam deserunt. Blanditiis cumque doloremque id labore autem
          incidunt expedita reprehenderit quisquam corporis quia. Voluptatibus
          ullam aut enim? Cupiditate a beatae odit optio eveniet debitis vel
          fugit blanditiis harum eligendi ratione, libero in accusantium
          necessitatibus facere est fugiat, itaque laboriosam exercitationem
          provident corrupti, perferendis animi praesentium? Alias eveniet in
          non placeat architecto accusamus ipsam esse corrupti animi vel
          aliquam, distinctio sapiente facere voluptates sint debitis dolore
          veniam, qui a error fuga! Aut veniam aliquam fuga debitis deserunt
          sequi sed maxime nemo similique nostrum placeat voluptatem cupiditate,
          aspernatur, reiciendis error voluptas eaque corporis autem eum
          repellat quam obcaecati, tenetur culpa. Aspernatur cum molestias unde,
          inventore excepturi numquam rem, voluptate fugit in obcaecati est
          provident soluta eveniet, placeat totam adipisci animi necessitatibus
          odit beatae facere voluptas. Laudantium, consequuntur, eos quia
          assumenda totam qui culpa omnis provident architecto minus sit
          eligendi laborum dolor ab recusandae impedit explicabo aspernatur enim
          cupiditate? Cumque atque omnis sequi fugiat excepturi nihil
          consequatur commodi veritatis, expedita facilis itaque nulla eum
          laborum in nesciunt praesentium saepe fugit laudantium odio eius error
          perferendis, unde, ipsa aperiam! Libero quos optio nesciunt debitis
          nostrum maxime ex porro quas nihil hic, voluptatibus vero, aperiam
          consequuntur. Sequi molestias itaque consequuntur ut velit nesciunt a
          ad qui cupiditate, iste ipsam quibusdam architecto, totam sunt aut
          ducimus debitis non facere provident sapiente esse suscipit maiores
          eligendi sed? Deleniti totam ducimus obcaecati ipsum aliquid ab odio!
          Repellendus, inventore sit mollitia velit consectetur nulla officia
          assumenda corporis, possimus sunt, beatae quis vel. Debitis, placeat,
          quaerat deleniti, laudantium fuga labore ab odit saepe cumque repellat
          dolore quos nam atque ad nulla. Quasi sed error quod fugit. Quas neque
          maiores aliquam non modi, nulla iusto recusandae veniam enim. Quidem
          veniam rem totam fugiat odit exercitationem aliquid, omnis beatae
          laboriosam explicabo libero, nihil consectetur doloribus, earum
          maiores in. Molestias iusto id aut eveniet doloribus? Quasi recusandae
          cum eaque. Similique ab consectetur quos deserunt eveniet nobis porro
          facilis suscipit, dignissimos vero asperiores eius, rerum cumque in
          voluptates alias voluptatibus perferendis veritatis enim quam! Nobis
          laboriosam alias fugiat praesentium repellendus nostrum eveniet! Quos
          quia facilis magni voluptatum suscipit iure voluptate cupiditate optio
          voluptatibus corrupti enim voluptatem hic dolor tempore cum illo ex,
          quibusdam vel vitae nulla. Ipsa perferendis consectetur dolores animi
          libero assumenda quidem facilis maxime ad, id praesentium, nobis
          eveniet, nemo illo repellat aut ab fuga ratione. Hic cumque voluptatem
          sapiente ea neque. Atque nulla maiores beatae excepturi rerum magnam
          et, molestiae similique at eveniet numquam quas! Temporibus voluptates
          fugiat unde sunt ipsam assumenda obcaecati ullam veniam molestias
          itaque mollitia a autem pariatur saepe sequi architecto soluta error
          fuga, ratione, deserunt praesentium. Ipsum obcaecati consectetur
          magnam! Quam vero consequatur dolore velit voluptatum necessitatibus
          quos veniam non unde, ut dolor. Molestias esse voluptas fuga excepturi
          nobis ipsa consectetur explicabo, temporibus expedita cumque? Neque
          harum tenetur debitis vitae! Provident eos reprehenderit vero magni,
          error totam dolor illo tempora ipsum vel iste non, in distinctio
          mollitia voluptatum ipsam perferendis inventore! Exercitationem illum
          temporibus perferendis natus quidem vel ipsum nobis magni assumenda
          voluptatum tempore molestias, id delectus esse sit eum iste. Earum
          reprehenderit quidem nemo veniam atque explicabo odit impedit error
          nisi! Aliquid magnam adipisci quae, eligendi soluta quisquam, autem
          cupiditate, obcaecati dolor facilis possimus culpa! Eligendi incidunt
          officia ut ducimus dolorum explicabo, accusamus, atque, sapiente
          voluptatem adipisci est fuga quis saepe tenetur laboriosam porro vel
          quia sed quos dolorem illo iusto at possimus praesentium! Aut
          consectetur, iste iure repudiandae assumenda delectus incidunt nihil
          non eligendi recusandae fugiat. Quae autem dignissimos dolore commodi
          aliquam nobis est repellendus error odio, reiciendis hic rerum maiores
          id ducimus quo. Ab deserunt suscipit nesciunt, cum adipisci vitae,
          maxime mollitia labore cupiditate, quae possimus porro optio? Sequi
          ratione dicta ipsam esse excepturi quaerat, cupiditate expedita
          aperiam saepe impedit, velit placeat dolor magnam. Minus dolorem at ut
          fugit. Animi, soluta! Illum voluptas perferendis molestias esse quae
          nemo nesciunt vel sit ipsam nobis non voluptatibus beatae qui
          voluptate ut rem ab perspiciatis magni numquam vero fuga, unde quas
          tempore ea! Et amet qui dolore in vitae dignissimos recusandae officia
          error. Illum eligendi ipsa vero accusamus cumque fuga animi quam vel
          quaerat quas? Accusantium error ipsum enim sapiente laboriosam animi
          nobis, quidem quis commodi deserunt. Recusandae perferendis facere
          pariatur. Necessitatibus sunt fuga quo, facere sed obcaecati
          aspernatur nam magnam recusandae, ipsa fugiat molestiae nisi. Optio
          ipsa at omnis, possimus explicabo distinctio blanditiis enim, soluta
          adipisci harum eaque id? Quibusdam maiores unde, architecto,
          voluptatum quisquam ut delectus nostrum dicta adipisci pariatur
          suscipit dolorum quod saepe ullam obcaecati quas molestiae
          necessitatibus at officia corrupti. Inventore, praesentium eius
          doloremque ad fugit quia eum. Animi, optio repellat. In quisquam
          voluptates quod deserunt dolorum vero ad? Recusandae labore fuga illum
          a voluptate, quae similique itaque dolorem, minus ex, qui dolor eaque.
        </div>
        <div style={{ fontSize: 60, paddingTop: "80px" }} id="test">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          placeat, laboriosam error maiores in recusandae aperiam molestiae
          ipsum sed adipisci est obcaecati explicabo, ullam ipsa officiis sint
          numquam, repellendus pariatur consequuntur consectetur sit optio
          possimus aliquam cumque. E xpedita voluptate obcaecati consequuntur
          voluptatibus dolorem error, incidunt officiis quo officia non itaque,
          eius nulla eligendi quod. A fugit ex, nesciunt explicabo ipsam id
          incidunt dolor obcaecati porro? Ipsum expedita inventore minus
          exercitationem facere illum dolorum iusto eligendi cumque, dolorem
          veniam aspernatur pariatur tempore debitis quibusdam voluptatum
          assumenda recusandae modi dolores adipisci, mollitia temporibus
          reprehenderit? Porro animi ullam veritatis reprehenderit beatae, aut
          ut vel voluptas commodi mollitia et molestiae atque odit temporibus
          praesentium ex, corporis quaerat impedit culpa. Quam, architecto
          consequatur nisi eaque nesciunt nam quaerat deserunt ab harum dolorum,
          nulla dolor quidem quasi nostrum sed, voluptatem rem exercitationem
          odit corrupti officiis iste sit. Architecto possimus obcaecati quae
          veritatis at, doloremque aliquam facere natus voluptatibus omnis animi
          laboriosam ipsum eos libero atque nesciunt sint inventore assumenda
          illo, nostrum, commodi tenetur. Doloremque, temporibus optio minima,
          quia sint ea culpa sed exercitationem voluptates dignissimos nam iusto
          voluptatem dicta laborum quis velit amet. Sit illum maxime facilis
          quisquam magnam aut blanditiis accusantium iste laborum qui tenetur
          ipsum suscipit nihil nemo, alias dolores itaque consequuntur fugit,
          sed asperiores exercitationem possimus quaerat, dolore quae? Nulla
          saepe ipsam deserunt. Blanditiis cumque doloremque id labore autem
          incidunt expedita reprehenderit quisquam corporis quia. Voluptatibus
          ullam aut enim? Cupiditate a beatae odit optio eveniet debitis vel
          fugit blanditiis harum eligendi ratione, libero in accusantium
          necessitatibus facere est fugiat, itaque laboriosam exercitationem
          provident corrupti, perferendis animi praesentium? Alias eveniet in
          non placeat architecto accusamus ipsam esse corrupti animi vel
          aliquam, distinctio sapiente facere voluptates sint debitis dolore
          veniam, qui a error fuga! Aut veniam aliquam fuga debitis deserunt
          sequi sed maxime nemo similique nostrum placeat voluptatem cupiditate,
          aspernatur, reiciendis error voluptas eaque corporis autem eum
          repellat quam obcaecati, tenetur culpa. Aspernatur cum molestias unde,
          inventore excepturi numquam rem, voluptate fugit in obcaecati est
          provident soluta eveniet, placeat totam adipisci animi necessitatibus
          odit beatae facere voluptas. Laudantium, consequuntur, eos quia
          assumenda totam qui culpa omnis provident architecto minus sit
          eligendi laborum dolor ab recusandae impedit explicabo aspernatur enim
          cupiditate? Cumque atque omnis sequi fugiat excepturi nihil
          consequatur commodi veritatis, expedita facilis itaque nulla eum
          laborum in nesciunt praesentium saepe fugit laudantium odio eius error
          perferendis, unde, ipsa aperiam! Libero quos optio nesciunt debitis
          nostrum maxime ex porro quas nihil hic, voluptatibus vero, aperiam
          consequuntur. Sequi molestias itaque consequuntur ut velit nesciunt a
          ad qui cupiditate, iste ipsam quibusdam architecto, totam sunt aut
          ducimus debitis non facere provident sapiente esse suscipit maiores
          eligendi sed? Deleniti totam ducimus obcaecati ipsum aliquid ab odio!
          Repellendus, inventore sit mollitia velit consectetur nulla officia
          assumenda corporis, possimus sunt, beatae quis vel. Debitis, placeat,
          quaerat deleniti, laudantium fuga labore ab odit saepe cumque repellat
          dolore quos nam atque ad nulla. Quasi sed error quod fugit. Quas neque
          maiores aliquam non modi, nulla iusto recusandae veniam enim. Quidem
          veniam rem totam fugiat odit exercitationem aliquid, omnis beatae
          laboriosam explicabo libero, nihil consectetur doloribus, earum
          maiores in. Molestias iusto id aut eveniet doloribus? Quasi recusandae
          cum eaque. Similique ab consectetur quos deserunt eveniet nobis porro
          facilis suscipit, dignissimos vero asperiores eius, rerum cumque in
          voluptates alias voluptatibus perferendis veritatis enim quam! Nobis
          laboriosam alias fugiat praesentium repellendus nostrum eveniet! Quos
          quia facilis magni voluptatum suscipit iure voluptate cupiditate optio
          voluptatibus corrupti enim voluptatem hic dolor tempore cum illo ex,
          quibusdam vel vitae nulla. Ipsa perferendis consectetur dolores animi
          libero assumenda quidem facilis maxime ad, id praesentium, nobis
          eveniet, nemo illo repellat aut ab fuga ratione. Hic cumque voluptatem
          sapiente ea neque. Atque nulla maiores beatae excepturi rerum magnam
          et, molestiae similique at eveniet numquam quas! Temporibus voluptates
          fugiat unde sunt ipsam assumenda obcaecati ullam veniam molestias
          itaque mollitia a autem pariatur saepe sequi architecto soluta error
          fuga, ratione, deserunt praesentium. Ipsum obcaecati consectetur
          magnam! Quam vero consequatur dolore velit voluptatum necessitatibus
          quos veniam non unde, ut dolor. Molestias esse voluptas fuga excepturi
          nobis ipsa consectetur explicabo, temporibus expedita cumque? Neque
          harum tenetur debitis vitae! Provident eos reprehenderit vero magni,
          error totam dolor illo tempora ipsum vel iste non, in distinctio
          mollitia voluptatum ipsam perferendis inventore! Exercitationem illum
          temporibus perferendis natus quidem vel ipsum nobis magni assumenda
          voluptatum tempore molestias, id delectus esse sit eum iste. Earum
          reprehenderit quidem nemo veniam atque explicabo odit impedit error
          nisi! Aliquid magnam adipisci quae, eligendi soluta quisquam, autem
          cupiditate, obcaecati dolor facilis possimus culpa! Eligendi incidunt
          officia ut ducimus dolorum explicabo, accusamus, atque, sapiente
          voluptatem adipisci est fuga quis saepe tenetur laboriosam porro vel
          quia sed quos dolorem illo iusto at possimus praesentium! Aut
          consectetur, iste iure repudiandae assumenda delectus incidunt nihil
          non eligendi recusandae fugiat. Quae autem dignissimos dolore commodi
          aliquam nobis est repellendus error odio, reiciendis hic rerum maiores
          id ducimus quo. Ab deserunt suscipit nesciunt, cum adipisci vitae,
          maxime mollitia labore cupiditate, quae possimus porro optio? Sequi
          ratione dicta ipsam esse excepturi quaerat, cupiditate expedita
          aperiam saepe impedit, velit placeat dolor magnam. Minus dolorem at ut
          fugit. Animi, soluta! Illum voluptas perferendis molestias esse quae
          nemo nesciunt vel sit ipsam nobis non voluptatibus beatae qui
          voluptate ut rem ab perspiciatis magni numquam vero fuga, unde quas
          tempore ea! Et amet qui dolore in vitae dignissimos recusandae officia
          error. Illum eligendi ipsa vero accusamus cumque fuga animi quam vel
          quaerat quas? Accusantium error ipsum enim sapiente laboriosam animi
          nobis, quidem quis commodi deserunt. Recusandae perferendis facere
          pariatur. Necessitatibus sunt fuga quo, facere sed obcaecati
          aspernatur nam magnam recusandae, ipsa fugiat molestiae nisi. Optio
          ipsa at omnis, possimus explicabo distinctio blanditiis enim, soluta
          adipisci harum eaque id? Quibusdam maiores unde, architecto,
          voluptatum quisquam ut delectus nostrum dicta adipisci pariatur
          suscipit dolorum quod saepe ullam obcaecati quas molestiae
          necessitatibus at officia corrupti. Inventore, praesentium eius
          doloremque ad fugit quia eum. Animi, optio repellat. In quisquam
          voluptates quod deserunt dolorum vero ad? Recusandae labore fuga illum
          a voluptate, quae similique itaque dolorem, minus ex, qui dolor eaque.
        </div>
      </div>
    </>
  );
}

export default App;
