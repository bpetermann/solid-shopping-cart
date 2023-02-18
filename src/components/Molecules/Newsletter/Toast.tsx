import { onMount, ParentComponent, createSignal } from 'solid-js';
import styles from './Styles/Toast.module.css';
import { Close } from '@/components/Atoms';

const Toast: ParentComponent<{
  close: () => void;
  success: boolean;
  time: number;
}> = (props) => {
  const [time, setTime] = createSignal<number>(100);

  let intervalid: number;

  onMount(() => {
    intervalid = setInterval(() => {
      setTime(time() - 1);
      if (time() === 0) {
        clearInterval(intervalid);
        props.close();
      }
    }, props.time / 100);
  });

  return (
    <section class={`${styles.toast} ${props.success && styles.success}`}>
      <div>
        <Close
          onClick={() => {
            clearInterval(intervalid);
            props.close();
          }}
        />
      </div>
      <div class={styles.close}>
        <img
          src={`/images/${props.success ? 'done' : 'error'}.png`}
          alt='close'
        />
        {props.children}
      </div>
      <div class={styles.outer}>
        <div
          class={styles.inner}
          style={{
            width: `${100 - time()}%`,
            transition: `width ${props.time / 100}ms`,
          }}
        />
      </div>
    </section>
  );
};

export default Toast;
