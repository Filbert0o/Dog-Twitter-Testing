import TwitterFeed from '../../src/containers/TwitterFeed';
import Tweet from '../../src/components/Tweet';

describe('TwitterFeed', () => {
  let wrapper;
  let data = [{
    id: 1,
    text: "This doesn't look like Kansas",
    user: {
       name: 'Todo',
       profile_image_url: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg'
    }
  }]

  beforeEach(() => {
    spyOn(TwitterFeed.prototype, 'handleSelectedTweet').and.callThrough();
    wrapper = mount(
      <TwitterFeed
        data={data}
      />
    )
  });

  //YOUR TEST CODE HERE
  // it('should return true', () => {
  //   expect(true).toEqual(true);
  // })
  //
  it('should have initial state as null', () => {
    expect(wrapper.state()).toEqual({ selectedTweetId: null });
  })

  it('should render Tweet components', () => {
    expect(wrapper.find(Tweet)).toBePresent();
  })

  it('should render the Tweet component with different props when selectedTweetId is null', () => {
    wrapper.setState({ selectedTweetId: null});
    expect(wrapper.find(Tweet).props()).toEqual({
      id: 1,
      text: "This doesn't look like Kansas",
      name: "Todo",
      userPhoto: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg',
      handleClick: jasmine.any(Function),
      className: ''
    })
  })

  it('should render the Tweet component with different props when selectedTweetId is changed', () => {
    wrapper.setState({ selectedTweetId: 1});
    expect(wrapper.find(Tweet).props()).toEqual({
      id: 1,
      text: "This doesn't look like Kansas",
      name: "Todo",
      userPhoto: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg',
      handleClick: jasmine.any(Function),
      className: 'selected'
    })
  })



})
