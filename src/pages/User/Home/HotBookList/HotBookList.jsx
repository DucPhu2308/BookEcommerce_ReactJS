import './HotBookList.css';
import HotBookItem from '@/components/User/HotBookItem/HotBookItem';
import { useEffect, useRef, useState } from 'react';

const HotBookList = ({list}) => {
    const boxListBooks = useRef(null);
    const btnLeft = useRef(null);
    const btnRight = useRef(null);
    const lineCircle = useRef(null);
    

    useEffect(() => {
        const listBook = boxListBooks.current;
        const books = boxListBooks.current.querySelectorAll('li');
        const btnPre = btnLeft.current;
        const btnNext = btnRight.current;
        let active = 0;
        let length = books.length - 1;

        lineCircle.current.innerHTML = renderLineCircle();

        if (lineCircle.current && lineCircle.current.querySelectorAll('.circle').length > 0) {
            lineCircle.current.querySelectorAll('.circle')[0].classList.add('been'); // Thêm class cho dot đầu tiên
        }

        

        const clickDot = () => {
            let dots = lineCircle.current.querySelectorAll('.circle');
            dots.forEach((dot, index) => {
                dot.onclick = function () {
                    let activeDot = lineCircle.current.querySelector('.circle.been');
                    activeDot.classList.remove('been');
                    dot.classList.add('been');
                    active = index * 3;
                    reloadSlide();
                }
            })
        }

        clickDot();

        btnNext.onclick = function () {
            if (active + 3 > length) {
                active = 0;
            }
            else {
                active += 3;
            }
            reloadSlide();
        }
        btnPre.onclick = function () {
            if (active - 3 < 0) {
                active = length - 1;
            }
            else {
                active -= 3;
            }
            reloadSlide();
        }
        let autoSlide = setInterval(() => { btnNext.click() }, 5000);
        const reloadSlide = () => {
            let checkLeft = books[active].offsetLeft;
            checkLeft = checkLeft - 70;
            listBook.style.left = -checkLeft + 'px';

            let activeDot = lineCircle.current.querySelector('.circle.been');
            activeDot.classList.remove('been');
            lineCircle.current.querySelectorAll('.circle')[active / 3].classList.add('been');

            clearInterval(autoSlide);
            autoSlide = setInterval(() => { btnNext.click() }, 5000);
        }

        return () => {
            // Cleanup
            btnNext.onclick = null;
            btnPre.onclick = null;
            clearInterval(autoSlide);
        }

    }, [list]);

    const renderLineCircle = () => {
        let length = list.length;
        let numberCircle = length / 3;
        let html = '';
        for (let i = 0; i < numberCircle; i++) {
            html += '<li><div class="circle"></div></li>';
        }
        return html;
    }

    return (
        <>
            <div className="container_nav_1_title">
                <span>Được xem nhiều nhất</span>
            </div>
            <div className="container_nav_1_listBooks">
                <div className="container_nav_1_listBooks_box" ref={boxListBooks}>
                    <ul>
                        {list.map((book, index) => (
                            <li key={index}>
                                <a href="/infoBook/{book.id}">
                                    <HotBookItem book={book} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="container_nav_1_listBooks_button">
                <div className="btn_nav_1_listBooks left" ref={btnLeft}>
                    <span>
                        <i className="fas fa-chevron-left"></i>
                    </span>

                </div>
                <div className="btn_nav_1_listBooks right" ref={btnRight}>
                    <span>
                        <i className="fas fa-chevron-right"></i>
                    </span>

                </div>
            </div>
            <div className="container_nav_1_listBooks_circles" >
                <ul ref={lineCircle}>
                </ul>
            </div>
        </>

    )
}

export default HotBookList;