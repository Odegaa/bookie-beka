import React from 'react';
import styles from './Donate.module.scss';
import donate from 'src/assets/images/donate.png';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Donate: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<number | null>(-1);
  const faq = React.useRef<HTMLDivElement>(null);

  const handleClick = (key: number | null) => {
    setActiveItem((prevActiveItem: number | null) => (prevActiveItem === key ? null : key));
  };

  const items = [
    {
      label: 'Puldan tısqarı qanday járdem bere alaman?',
      children: (
        <p>
          - Jámáátimizge ıqtıyarlı, awdarmashı, dublyaj aktyorı sıpatında járdem beriwińiz múmkin.
          Jámáátimizge qosılıw ushın (____) bul jerdi basıń.
        </p>
      ),
    },
    {
      label: 'Sırt ellerden de pul jibere alaman ba?',
      children: <p>- Awa, álbette mine usı silteme arqalı tóleseńiz boladı.</p>,
    },
    {
      label: 'Qárejetler smetası bar ma?',
      children: (
        <p>
          - Awa, biz hár ayda finanslıq esabat berip baramız. Olardı tómendegi kesteden tabıwıńız
          múmkin.
        </p>
      ),
    },
    {
      label: 'Naq pulda qayır-saqawat qılsam bola ma?',
      children: (
        <p>
          - Yaq. Biz qayır-saqawattı tek ǵana Click, Payme qosımshaları Visa, mastercard sistemaları
          hám bank arqalı qabıl etemiz.
        </p>
      ),
    },
    {
      label: 'Audiokitaplardı qalay satıp alamız?',
      children: (
        <p>
          Saytımızda ózińizge unaǵan kitaptı tańlap, "Satıp alıw" túymesin basasız. Soń tólemdi
          Payme, Click, Bank kartaları arqalı ámelge asırasız.
        </p>
      ),
    },
  ];

  return (
    <div className={styles.donate}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h3>Jańa shoqqılardı birgelikte iyeleyik!</h3>
          <p>
            Biz, jańadan ashılǵan «Bookie» qaraqalpaq tilindegi audiokitarlar platforması, siz
            sıyaqlı keńpeyil hám qayır saqawatlı insanlardıń járdemine súyenemiz. Eger usı sózlerdi
            oqıp atırǵanlar keminde 20 mıń somnan qayır-saqawat qılsa, joybar jumısları 2 jıl
            ishinde óz juwmaǵına jetedi. Sizden joybardı qollap-quwatlawıńızdı soraymız hám bunıń
            menen siz Qaraqalpaq tiliniń rawajlanıwına úlken úles qosqan bolasız.
          </p>
        </div>
        <img src={donate} alt="donate" />
      </div>
      <div className={styles.faq} ref={faq}>
        <h4>Soraw-juwap</h4>
        <div className={styles.accordion}>
          {items.map((item, index) => (
            <div key={index} className={styles.accordionItem}>
              <div
                onClick={() => handleClick(index)}
                className={`${styles.accordionHeader} ${activeItem === index ? styles.active : ''}`}
              >
                {item.label}
                <span className={styles.plus}>
                  {activeItem === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </div>
              <div
                className={`${styles.accordionContent} ${activeItem === index ? styles.show : ''}`}
              >
                {item.children}
              </div>
            </div>
          ))}
          <span className={styles.number}>
            Qosımsha sorawlarıńız bolsa, +998 93 362 57 44 nomerine xabarlasqan halda juwap alasız.
          </span>
        </div>
      </div>
    </div>
  );
};

export { Donate };
