import {shallow} from 'enzyme';
import UpDownButtons from '../components/upDownButtons'

describe('<UpDownButtons/>',()=>{
  it('should render two buttons', () =>{
   const wrapper = shallow(<UpDownButtons/>);
   expect(wrapper.find(button)).to.have.length(2);
  
  })




})