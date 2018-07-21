import { Subject, Subscription } from 'rxjs';
import { TechVarsElStyleI } from '../interfaces/tech-vars';
import { STATE_DEFAULT } from '../constants/tech-state';

/**
 * Define new props in class prototype
 * Create and remove subscriptions
 */
export function TechState(): ClassDecorator {
  return function (target: any) {
    target.prototype.setInitialStyles = function(styles: TechVarsElStyleI) {
      this.state = STATE_DEFAULT;
      Object.keys(styles.default).forEach(k => {
        this.el.nativeElement.style[k] = styles.default[k];
      });
    };
  };
}
