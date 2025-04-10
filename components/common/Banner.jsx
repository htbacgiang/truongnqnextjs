import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import styles from '../../styles/Banner.module.scss';

const Banner = () => {
    return (
        <>
            <div className={styles.homeHeaderBanner}>
                <div className={styles.banner} style={{ position: 'relative' }}>
                    <Image
                        src="/banner1.png"
                        alt="Banner"
                        className={styles.bannerImg}
                        layout="responsive"
                        width={1920}
                        height={1080}
                        priority
                    />
                    {/* Chữ "WEB DESIGNER" với viền đen và hiệu ứng */}
                    <div className={`${styles.webDesigner} animate-bounce hidden lg:block absolute bottom-10 left-1/2 transform -translate-x-1/2`}>
                        WEB DESIGNER
                    </div>
                </div>

                <div className={styles.intro}>
                    <section className={styles.home} id="home">
                        <div className={styles.maxWidth}>
                            <div className={styles.homeContent}>
                                <div className={styles.text1}>Hello, Iam:</div>
                                <div className={styles.text2}>Ngô Quang Trường</div>
                                <div className={styles.text3}>
                                    And Im a &nbsp;
                                    <span className="typing">
                                        <Typewriter
                                            options={{
                                                autoStart: true,
                                                loop: true,
                                                delay: 40,
                                                strings: [
                                                    'Fullstack Developer',
                                                    'Designer',
                                                    'Video Editer',
                                                    'Photographer',
                                                    'Ads Manager',
                                                    'SEOer',
                                                    'and Shipper',
                                                ],
                                            }}
                                        />
                                    </span>
                                </div>
                                <div className={styles.buttons}>
                                    <Link href="/gioi-thieu">
                                        <button>Xem Portfolio</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Banner;