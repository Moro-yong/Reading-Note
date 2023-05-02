export default function latestPosts() {
  return (
    <div className="w-full flex flex-col justify-center mt-6">
      <div className="flex h-16 mb-6">
        <button className="flex-1 border-b bg-neutral-200">나의 글</button>
        <div className="border-r"></div>
        <button className="flex-1 border-b">다른 작가의 글</button>
      </div>
      <div>
        {userPost.map((post) => (
          <div className="flex items-center w-full h-60">
            <div className="w-[calc(100%-12rem)] pr-8">
              <p className="text-2xl font-semibold mb-2">{post.title}</p>
              <p className="text-zinc-500">{post.contents}</p>
              <div className="flex justify-between my-5">
                <span className="text-[#1f6fff] text-sm">{`${post.book_name} / ${post.book_writer}`}</span>
                <span className="flex text-sm">
                  {post.post_keyword.map((keyword) => (
                    <button className="ml-2">{`#${keyword}`}</button>
                  ))}
                </span>
              </div>
            </div>
            <div className="h-48 w-48 bg-slate-600"></div>
          </div>
        ))}
      </div>
      <button className="my-10 ">more</button>
    </div>
  );
}

const userPost = [
  {
    id: 0,
    title: '하나부터 열까지',
    contents:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis',
    book_writer: '테르트',
    book_name: '하나부터 열까지',
    post_writer: '하나부터 열까지',
    writer_date: '',
    post_keyword: ['a', 'b', 'c'],
  },
  {
    id: 1,
    title: '어린왕자',
    contents:
      'eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos ',
    book_writer: '테르트레티미',
    book_name: '하나부터 열까지',
    post_writer: '하나부터 열까지',
    writer_date: '',
    post_keyword: ['a', 'b', 'c'],
  },
  {
    id: 2,
    title: '애국가가',
    contents: 'alias error harum maxime adipisci amet laborum. Perspiciatis ',
    book_writer: '테르트레티미',
    book_name: '하나부터 열까지',
    post_writer: '하나부터 열까지',
    writer_date: '',
    post_keyword: ['a', 'b', 'c'],
  },
  {
    id: 3,
    title: '인공지능 이야기',
    contents:
      'Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam  totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!',
    book_writer: '테르트레티미',
    book_name: '하나부터 열까지',
    post_writer: '하나부터 열까지',
    writer_date: '',
    post_keyword: ['a', 'b', 'c'],
  },
];
