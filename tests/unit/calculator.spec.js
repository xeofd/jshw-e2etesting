import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

// Describes
describe('App.vue', () => {

  // It can add numbers
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  });

  // It can subtract
  it('can subtract numbers', () => {
    const wrapper = shallowMount(App);

    wrapper.vm.previousTotal = 7;
    wrapper.vm.subtract('4');

    expect(wrapper.vm.runningTotal).to.equal(3);
  });

  // It can multiply
  it('can multiply numbers', () => {
    const wrapper = shallowMount(App);

    wrapper.vm.previousTotal = 3;
    wrapper.vm.multiply(5);

    expect(wrapper.vm.runningTotal).to.equal(15);
  });

  // It can divide
  it('can divide numbers', () => {
    const wrapper = shallowMount(App);

    wrapper.vm.previousTotal = 21;
    wrapper.vm.divide(7);

    expect(wrapper.vm.runningTotal).to.equal(3);
  });

  // It can record multiple number clicks
  it('can record multiple number clicks', () => {
    const wrapper = shallowMount(App);

    wrapper.vm.numberClick(1);
    wrapper.vm.numberClick(1);
    wrapper.vm.numberClick(1);

    expect(wrapper.vm.runningTotal).to.equal(111);
  });

  // It can record multiple operators
  it('can record multiple operators', () => {
    const wrapper = shallowMount(App);

    wrapper.vm.numberClick(1);
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick(2);
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick(2);
    wrapper.vm.operatorClick('=');
    
    expect(wrapper.vm.runningTotal).to.equal(6);
  });

  // It can clear the total
  it('can clear the total', () => {
    const wrapper = shallowMount(App);

    wrapper.vm.numberClick(1);
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick(2);
    wrapper.vm.operatorClick('=');

    wrapper.vm.clearClick();
    
    expect(wrapper.vm.runningTotal).to.equal(0);
  });

})
