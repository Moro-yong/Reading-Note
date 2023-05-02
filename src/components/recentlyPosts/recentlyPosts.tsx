export default function RecentlyPosts() {
  return (
    <section className="flex flex-col items-center py-20">
      <h2 className="text-4xl font-bold text-left w-full">Recently</h2>
      <div>
        {[1, 2, 3, 4, 5].map((post) => (
          <div key={post} className="flex gap-10 py-10 border-b">
            <div>
              <h3 className="h-1/5 font-bold text-2xl">{`Human Resources (Ressources humaines)`}</h3>
              <p className="h-3/5 line-clamp-5">
                법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써 효력을 발생한다.
                감사원은 세입·세출의 결산을 매년 검사하여 대통령과 차년도국회에 그 결과를 보고하여야
                한다. 국가의 세입·세출의 결산, 국가 및 법률이 정한 단체의 회계검사와 행정기관 및
                공무원의 직무에 관한 감찰을 하기 위하여 대통령 소속하에 감사원을 둔다. 형사피고인은
                유죄의 판결이 확정될 때까지는 무죄로 추정된다. 국정감사 및 조사에 관한 절차 기타
                필요한 사항은 법률로 정한다. 사면·감형 및 복권에 관한 사항은 법률로 정한다. 의원을
                제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 대법관은 대법원장의
                제청으로 국회의 동의를 얻어 대통령이 임명한다. 법률이 정하는 주요방위산업체에
                종사하는 근로자의 단체행동권은 법률이 정하는 바에 의하여 이를 제한하거나 인정하지
                아니할 수 있다.
              </p>
              <div className="flex items-end h-1/5">작성자 : ㅁㅁㅁㅁㅁ</div>
            </div>
            <div className="min-w-[12rem] h-48 bg-slate-200">a</div>
            {/* <Image src={"/"} alt="image" width={100} height={100} /> */}
          </div>
        ))}
      </div>

      <button className="mt-12 border py-2 px-6 rounded-3xl">more</button>
    </section>
  );
}
