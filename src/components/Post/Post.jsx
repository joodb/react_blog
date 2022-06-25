import './post.css'
import Category from '../Category/Category'
import Author from '../Author/Author'
import { Link } from 'react-router-dom'


export default function Post({post}) {

    console.log(post.thumbnail);
    console.log(process.env.PUBLIC_URL);
    return (
        <li id={post.id}>
            <Link to="post-view" className="post">
                <article>
                    <img src={process.env.PUBLIC_URL+post.thumbnail} alt="" />
                    <div className="contents-wrap">
                        {/* 카테고리 에러 확인 필요 */}
                        <Category category={post.category}/>
                        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <Author userName={post.userName}/>
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
            </Link>
        </li>
    )
}
