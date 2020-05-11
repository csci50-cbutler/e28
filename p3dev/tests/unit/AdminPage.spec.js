import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import AdminPage from '@/components/pages/AdminPage.vue'

describe('AdminPage.vue', () => {
    it('renders countdown clock', () => {
        let countdown = "document.getElementById('countdown').value";
        const wrapper = mount(AdminPage, {
            propsData: { countdown }
        })
        expect(wrapper.text()).to.include('Reveal Day');
        expect(wrapper.find("[data-test='countdown-timer']").exists()).to.equal(true);
        expect(wrapper.find('.vuejs-countdown').exists()).to.equal(true);
    })
})