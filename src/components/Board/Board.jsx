import styles from "./Board.module.css";

import kw from "./images/kw.svg";
import qw from "./images/qw.svg";
import rw from "./images/rw.svg";
import bw from "./images/bw.svg";
import nw from "./images/nw.svg";
import pw from "./images/pw.svg";

import kb from "./images/kb.svg";
import qb from "./images/qb.svg";
import rb from "./images/rb.svg";
import bb from "./images/bb.svg";
import nb from "./images/nb.svg";
import pb from "./images/pb.svg";

const Board = () => {
  return (
    <div className={styles.board_container}>
      <div className={styles.angle}></div>
      <div className={styles.letters}>
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
        <div>e</div>
        <div>f</div>
        <div>g</div>
        <div>h</div>
      </div>
      <div className={styles.angle}></div>
      <div className={styles.numbers}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
      <div className={styles.board}>
        <div className={styles.black}>
          <img src={rw} />
        </div>
        <div className={styles.white}>
          <img src={nw} />
        </div>
        <div className={styles.black}>
          <img src={bw} />
        </div>
        <div className={styles.white}>
          <img src={qw} />
        </div>
        <div className={styles.black}>
          <img src={kw} />
        </div>
        <div className={styles.white}>
          <img src={bw} />
        </div>
        <div className={styles.black}>
          <img src={nw} />
        </div>
        <div className={styles.white}>
          <img src={rw} />
        </div>

        <div className={styles.white}>
          <img src={pw} />
        </div>
        <div className={styles.black}>
          <img src={pw} />
        </div>
        <div className={styles.white}>
          <img src={pw} />
        </div>
        <div className={styles.black}>
          <img src={pw} />
        </div>
        <div className={styles.white}>
          <img src={pw} />
        </div>
        <div className={styles.black}>
          <img src={pw} />
        </div>
        <div className={styles.white}>
          <img src={pw} />
        </div>
        <div className={styles.black}>
          <img src={pw} />
        </div>

        <div className={styles.black}></div>
        <div className={styles.white}></div>
        <div className={styles.black}></div>
        <div className={styles.white}></div>
        <div className={styles.black}></div>
        <div className={styles.white}></div>
        <div className={styles.black}></div>
        <div className={styles.white}></div>

        <div className={styles.white}></div>
        <div className={styles.black}></div>
        <div className={styles.white}></div>
        <div className={styles.black}></div>
        <div className={styles.white}></div>
        <div className={styles.black}></div>
        <div className={styles.white}></div>
        <div className={styles.black}></div>

        <div className={styles.black}></div>
        <div className={styles.white}></div>
        <div className={styles.black}></div>
        <div className={styles.white}></div>
        <div className={styles.black}></div>
        <div className={styles.white}></div>
        <div className={styles.black}></div>
        <div className={styles.white}></div>

        <div className={styles.white}></div>
        <div className={styles.black}></div>
        <div className={styles.white}></div>
        <div className={styles.black}></div>
        <div className={styles.white}></div>
        <div className={styles.black}></div>
        <div className={styles.white}></div>
        <div className={styles.black}></div>

        <div className={styles.black}>
          <img src={pb} />
        </div>
        <div className={styles.white}>
          <img src={pb} />
        </div>
        <div className={styles.black}>
          <img src={pb} />
        </div>
        <div className={styles.white}>
          <img src={pb} />
        </div>
        <div className={styles.black}>
          <img src={pb} />
        </div>
        <div className={styles.white}>
          <img src={pb} />
        </div>
        <div className={styles.black}>
          <img src={pb} />
        </div>
        <div className={styles.white}>
          <img src={pb} />
        </div>

        <div className={styles.white}>
          <img src={rb} />
        </div>
        <div className={styles.black}>
          <img src={nb} />
        </div>
        <div className={styles.white}>
          <img src={bb} />
        </div>
        <div className={styles.black}>
          <img src={qb} />
        </div>
        <div className={styles.white}>
          <img src={kb} />
        </div>
        <div className={styles.black}>
          <img src={bb} />
        </div>
        <div className={styles.white}>
          <img src={nb} />
        </div>
        <div className={styles.black}>
          <img src={rb} />
        </div>
      </div>
      <div className={styles.numbers}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
      <div className={styles.angle}></div>
      <div className={styles.letters}>
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
        <div>e</div>
        <div>f</div>
        <div>g</div>
        <div>h</div>
      </div>
      <div className={styles.angle}></div>
    </div>
  );
};

export default Board;
