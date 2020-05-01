import { decorate, observable } from "mobx";
import {AttributeAction} from './attribute.action';

class AttributeStore extends AttributeAction {
  showModal = false
}

AttributeStore = decorate(AttributeStore, {
  showModal: observable,
});

export default new AttributeStore();
