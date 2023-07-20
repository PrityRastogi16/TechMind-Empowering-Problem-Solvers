import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle , AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";
const Home = () => {
  return (
    <>
    <div className='home' id="home">
      <main>
        <h1>TechyBucket</h1>
        <p>Solutions to all your problems</p>
      </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We have all the solution related to tech.
                We are leading tech company whose aim is to increase the problem solving ability in students.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are ?</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur doloremque quo ab, placeat culpa sit earum labore dicta quibusdam accusamus nostrum beatae fugiat a quidem alias eius ex voluptates corrupti fuga deleniti nemo nobis necessitatibus! Totam perspiciatis dicta, sit excepturi quis praesentium quae quaerat distinctio soluta tempora iusto sequi dolor numquam. Dolorum voluptates repudiandae atque voluptatibus quisquam dolore laudantium incidunt alias consectetur dicta! Totam porro, magni mollitia quam iusto provident ipsam? Id qui at harum porro hic quis, cumque alias maiores fuga esse in doloribus iure commodi, dicta, sint fugit? Ex nihil perferendis aliquam unde soluta, ad repudiandae voluptas placeat.</p>
        </div>
    </div>
    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{
                    animationDelay:"0.3s"
                }}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>

                <div style={{
                    animationDelay:"0.5s"
                }}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>

                <div style={{
                    animationDelay:"0.7s"
                }}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>

                <div style={{
                    animationDelay:"0.3s"
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home;
