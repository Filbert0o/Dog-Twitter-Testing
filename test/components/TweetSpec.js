import Tweet from '../../src/components/Tweet';

describe('Tweet', () => {
  // YOUR TEST CODE HERE
  let handleClick, wrapper
  beforeEach(() => {
    handleClick = jasmine.createSpy('handleClick spy')
    wrapper = mount(
      <Tweet
        id='1'
        text="This doesn't look like Kansas"
        name="Todo"
        userPhoto='http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg'
        handleClick={handleClick}
        className=''
      />
    )
  });
  //
  it('should render div, img, span, p tags', () => {
    expect(wrapper.find('div')).toBePresent();
    expect(wrapper.find('img')).toBePresent();
    expect(wrapper.find('span')).toBePresent();
    expect(wrapper.find('p')).toBePresent();
  });
  //
  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg'
    });
  });



})
