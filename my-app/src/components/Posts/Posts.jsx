import './posts.css'
import Category from '../Category/Category'
import Author from '../Author/Author'
import Post from '../Post/Post'

export default function Posts() {
    return (
        <>
            <h2 className="a11y-hidden">Post</h2>
            <ul className="posts">
                <Post/>
                <li>
                    <a href="post-view.html" className="post">
                        <article>
                            <img src="./images/post-img5.jpg" alt="" />
                            <div className="contents-wrap">
                                <Category />
                                {/* <dl class="category">
                                    <dt class="a11y-hidden">Category</dt>
                                    <dd>Life</dd>
                                    <dd>Style</dd>
                                </dl> */}
                                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
                                <Author />
                                {/* <dl class="author-wrap">
                                    <dt class="a11y-hidden">Author</dt>
                                    <dd class="author"><img src="./images/profile.jpg" alt="" /> Chilli</dd>
                                    <dt class="a11y-hidden">Created</dt>
                                    <dd class="created">2022.05.25</dd>
                                </dl> */}
                                <p className="post-description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                                    facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                                    corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                                    illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                                    dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
                                    dolor quas odio cum incidunt repudiandae vel."
                                </p>
                            </div>
                        </article>
                    </a>
                </li>
                <li>
                    <a href="post-view.html" className="post">
                        <article>
                            <img src="./images/post-img4.jpg" alt="" />
                            <div className="contents-wrap">
                                <Category />
                                {/* <dl class="category">
                                    <dt class="a11y-hidden">Category</dt>
                                    <dd>Life</dd>
                                    <dd>Style</dd>
                                </dl> */}

                                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
                                <Author />
                                {/* <dl class="author-wrap">
                                    <dt class="a11y-hidden">Author</dt>
                                    <dd class="author"><img src="./images/profile.jpg" alt="" /> Chilli</dd>
                                    <dt class="a11y-hidden">Created</dt>
                                    <dd class="created">2022.05.25</dd>
                                </dl> */}
                                <p className="post-description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                                    facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                                    corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                                    illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                                    dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
                                    dolor quas odio cum incidunt repudiandae vel."
                                </p>
                            </div>
                        </article>
                    </a>
                </li>
                <li>
                    <a href="post-view.html" className="post">
                        <article>
                            <img src="./images/post-img3.jpg" alt="" />
                            <div className="contents-wrap">
                                <Category />
                                {/* <dl class="category">
                                    <dt class="a11y-hidden">Category</dt>
                                    <dd>Life</dd>
                                    <dd>Style</dd>
                                </dl> */}

                                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
                                <Author />
                                {/* <dl class="author-wrap">
                                    <dt class="a11y-hidden">Author</dt>
                                    <dd class="author"><img src="./images/profile.jpg" alt="" /> Chilli</dd>
                                    <dt class="a11y-hidden">Created</dt>
                                    <dd class="created">2022.05.25</dd>
                                </dl> */}
                                <p className="post-description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                                    facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                                    corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                                    illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                                    dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
                                    dolor quas odio cum incidunt repudiandae vel."
                                </p>
                            </div>
                        </article>
                    </a>
                </li>
                <li>
                    <a href="post-view.html" className="post">
                        <article>
                            <img src="./images/post-img2.jpg" alt="" />
                            <div className="contents-wrap">
                                <Category />
                                {/* <dl class="category">
                                    <dt class="a11y-hidden">Category</dt>
                                    <dd>Life</dd>
                                    <dd>Style</dd>
                                </dl> */}

                                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
                                <Author />
                                {/* <dl class="author-wrap">
                                    <dt class="a11y-hidden">Author</dt>
                                    <dd class="author"><img src="./images/profile.jpg" alt="" /> Chilli</dd>
                                    <dt class="a11y-hidden">Created</dt>
                                    <dd class="created">2022.05.25</dd>
                                </dl> */}
                                <p className="post-description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                                    facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                                    corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                                    illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                                    dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
                                    dolor quas odio cum incidunt repudiandae vel."
                                </p>
                            </div>
                        </article>
                    </a>
                </li>
                <li>
                    <a href="post-view.html" className="post">
                        <article>
                            <img src="./images/post-img1.jpg" alt="" />
                            <div className="contents-wrap">
                                <Category />
                                {/* <dl class="category">
                                    <dt class="a11y-hidden">Category</dt>
                                    <dd>Life</dd>
                                    <dd>Style</dd>
                                </dl> */}

                                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
                                <Author />
                                {/* <dl class="author-wrap">
                                    <dt class="a11y-hidden">Author</dt>
                                    <dd class="author"><img src="./images/profile.jpg" alt="" /> Chilli</dd>
                                    <dt class="a11y-hidden">Created</dt>
                                    <dd class="created">2022.05.25</dd>
                                </dl> */}
                                <p className="post-description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                                    facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
                                    corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                                    illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
                                    dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
                                    dolor quas odio cum incidunt repudiandae vel."
                                </p>
                            </div>
                        </article>
                    </a>
                </li>
            </ul>
        </>
    )
}
