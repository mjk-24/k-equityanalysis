import { Article } from '../types';

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Samsung Electronics: The Rebirth',
    title_ko: '삼성전자: 부활',
    excerpt: 'Samsung Electronics is seeing one of its strongest stock rallies in history as the AI industry shifts towards agentic agents and memory prices surge.',
    excerpt_ko: 'AI 산업이 에이전트 기반으로 전환되고 메모리 가격이 급등함에 따라 삼성전자가 역사상 가장 강력한 주가 상승세를 보이고 있습니다.',
    content: `
# Samsung Electronics: The Rebirth

Samsung Electronics (KRX: 005930) has been the leading contributor to the meteoric rise of KOSPI in the past year. After being stuck between 50,000 KRW and 60,000 KRW between 2024 and early 2025, Samsung Electronics is now seeing one of its strongest stock rallies in history.

As the AI industry shifts from generative models to agentic agents, the memory industry has seen an unprecedented rise in memory prices. In the past year, DDR4 have seen price increases reaching nearly 300% and DDR5 prices rising to nearly 260% of early 2025 prices. With the demand of HBMs from NVIDIA, who has also seen impressive revenue growth, the South Korean semiconductor giants have become responsible for 34.7% of export revenue in the country. 

Although most project this rise will continue for quite some time, it remains important to look for any cracks in the market that could bring the stock down. 

One possible cause of correction comes from abroad. With big-tech spending projected to reach the $650 billion mark this year, the memory industry has seen an unsatiable demand for their products. This is highlighted by the 1,500% rise in SanDisk (NASDAQ: SNDK) from its lowest point in 2025. Although at first the big tech spending spree acted as a source of excitement for the market, recent announcements from Google, Amazon, and Meta have all brought their stocks down as concerns regarding ROI and an AI bubble have taken ahold the narrative. As the largest customers of NVIDIA, any signs of of the Mag7 becoming more conservative with their spending can reduce demand for NVIDIA's GPU, hence reducing demand for South Korean HBMs, and DDR memory.

Another source of concern is the advancements in Chinese DRAM technology from companies like CXMT which has been rapidly expanding with support from the government and its pool of engineers. The rise in memory costs have and will put downward pressure on capital efficiency regarding hardware purchases, which could incentivize them to look for alternative suppliers. Here, Chinese companies like CXMT seem to be in a favorable position. With lower costs of production and rapidly increasing production yield, CXMT could put downward pressure on prices as they begin to supply more DRAM in the market. If Samsung and Hynix choose to expand their own production in response to the Chinese competition, this could put additional downward pressure on DRAM price. 

The reasons above may or may not materialize, yet it is increasingly important we look out for any cracks in the market as prices race up.

*The information provided is for informational purposes only and does not constitute financial or investment advice. Any investment decisions are made solely at your own risk. Past performance is not indicative of future results.*
    `,
    content_ko: `
# 삼성전자: 부활

삼성전자(KRX: 005930)는 지난 1년 동안 코스피의 유성 같은 상승에 핵심적인 기여를 해왔습니다. 2024년과 2025년 초 사이 50,000원과 60,000원 사이에 갇혀 있던 삼성전자는 현재 역사상 가장 강력한 주가 랠리를 보이고 있습니다.

AI 산업이 생성형 모델에서 에이전트 기반 AI로 전환됨에 따라 메모리 산업은 전례 없는 가격 상승을 경험했습니다. 지난 1년 동안 DDR4는 약 300%의 가격 상승을 보였으며, DDR5 가격은 2025년 초 가격의 약 260%까지 치솟았습니다. 인상적인 매출 성장을 보여준 엔비디아(NVIDIA)의 HBM 수요와 함께, 한국의 반도체 거인들은 국가 수출 수익의 34.7%를 책임지게 되었습니다.

대부분이 이러한 상승세가 당분간 지속될 것으로 전망하지만, 주가를 하락시킬 수 있는 시장의 균열을 살피는 것이 중요합니다.

조정의 한 가지 가능한 원인은 해외에서 올 수 있습니다. 올해 빅테크 지출이 6,500억 달러에 달할 것으로 예상됨에 따라 메모리 산업은 제품에 대한 만족할 줄 모르는 수요를 목격했습니다. 이는 2025년 최저점 대비 1,500% 상승한 샌디스크(SanDisk, NASDAQ: SNDK)의 사례에서 잘 드러납니다. 초기에는 빅테크의 지출 열풍이 시장의 흥분 요소로 작용했지만, 최근 구글, 아마존, 메타의 발표는 투자 대비 수익(ROI)과 AI 거품에 대한 우려가 내러티브를 장악하면서 주가를 하락시켰습니다. 엔비디아의 최대 고객으로서 매그니피센트 7(Mag7) 기업들이 지출에 더 보수적으로 변하는 조짐이 보인다면 엔비디아 GPU에 대한 수요가 줄어들고, 결과적으로 한국산 HBM 및 DDR 메모리에 대한 수요도 감소할 수 있습니다.

또 다른 우려 사항은 정부와 엔지니어 풀의 지원을 받아 급격히 확장하고 있는 CXMT와 같은 중국 기업들의 DRAM 기술 발전입니다. 메모리 비용의 상승은 하드웨어 구매에 대한 자본 효율성에 하방 압력을 가할 것이며, 이는 그들이 대안 공급업체를 찾도록 유도할 수 있습니다. 여기서 CXMT와 같은 중국 기업들이 유리한 위치에 있는 것으로 보입니다. 낮은 생산 비용과 빠르게 증가하는 수율을 바탕으로 CXMT는 시장에 더 많은 DRAM을 공급하기 시작하면서 가격에 하방 압력을 가할 수 있습니다. 만약 삼성과 하이닉스가 중국의 경쟁에 대응하여 자체 생산을 확대하기로 선택한다면, 이는 DRAM 가격에 추가적인 하방 압력을 가할 수 있습니다.

위의 이유들이 현실화될 수도 있고 그렇지 않을 수도 있지만, 가격이 급등함에 따라 시장의 균열을 주의 깊게 살피는 것이 점점 더 중요해지고 있습니다.

*제공된 정보는 정보 제공 목적으로만 사용되며 금융 또는 투자 자문을 구성하지 않습니다. 모든 투자 결정은 전적으로 귀하의 책임하에 이루어집니다. 과거의 성과가 미래의 결과를 보장하지 않습니다.*
    `,
    date: 'Mar 11, 2026',
    ticker: 'KRX:005930',
    rating: 'Buy',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200&h=600'
  },
  {
    id: '2',
    title: 'SK Hynix: Riding the NVIDIA Wave',
    title_ko: 'SK하이닉스: 엔비디아 파도를 타다',
    excerpt: 'SK Hynix has secured a cutting-edge lead in the HBM market, becoming a sole supplier to NVIDIA. We explore its technical edges and potential risks.',
    excerpt_ko: 'SK하이닉스는 HBM 시장에서 최첨단 리더십을 확보하며 엔비디아의 독점 공급업체가 되었습니다. 기술적 강점과 잠재적 리스크를 살펴봅니다.',
    content: `
# SK Hynix: Riding the NVIDIA Wave

SK Hynix (KRX: 000660) started off as Hyundai Electronics, as a part of the Hyundai group founded by Chung Ju-Yung. Although it led to the development of Korean semiconductors along with Samsung Electronics, it came into financial trouble when it acquired LG semiconductors back in 1999. After its dark ages without an owner which spanned from 2001 to 2011, it was acquired by the South Korean conglomerate, SK group, which invested huge amounts into R&D, making it possible for them to gain a cutting-edge lead in the HBM market.

The importance of HBM in the development of AI models has brought about record demand for SK Hynix HBMs. Although companies such as Samsung Electronics and Micron Technology have invested large amounts of capital to catch up, SK Hynix was able to protect its technological lead. MR-MUF, or Mass Reflow-Molded Underfill, is one of the technical edges SK Hynix have over the others. By filling in a liquid protectant between the semiconductor chips, SK Hynix can produce HBMs that are 10% more efficient at heat management compared to its competitors. This edge allows Hynix’s products appeal to data center companies who have struggled to keep data centers from overheating.

The technical edge that SK Hynix had over its competitors allowed it to become a sole supplier of HBMs to NVIDIA, who arguably is the center of the AI industry. As Samsung Electronics continuously failed to meet heat management benchmarks, SK Hynix was able to see incredible revenue growth (47% in 2025) and operating margin (101% YoY). This has been accelerated by the rise in DDR5 and SSD prices. 

In 2026, SK Hynix is projected to see around 210% to 250% increases in EPS. And investment banks are hiking up target prices that sees Hynix as having a 30 to 40% upside from the current price of around 1,000,000 KRW. 

While EPS, revenue, and operating margin growth are impressive, time such as these call for a detailed look into any reasons that could bring the stock price down.

The concerns for SK Hynix are quite similar to those of Samsung Electronics. Expanding demand for memory products has pushed stock prices up to record levels, however it ultimately is tied to the narrative of increasing AI spending and it being able to become a sustainable source of revenue. If there are any signs of faltering commitments to AI infrastructure spending by the big tech companies, memory companies won’t be able to escape a huge correction. 

Unlike Samsung Electronics who have invested heavily in building fabs and expanding their foundry business, SK Hynix lacks the ability to generate revenue from this aspect. Missing this source of revenue means SK Hynix is likely more cyclical compared to its counterpart like Samsung Electronics. This could cause SK Hynix to be more volatile when it comes to a correction period. 

*The information provided is for informational purposes only and does not constitute financial or investment advice. Any investment decisions are made solely at your own risk. Past performance is not indicative of future results.*
    `,
    content_ko: `
# SK하이닉스: 엔비디아 파도를 타다

SK하이닉스(KRX: 000660)는 정주영 회장이 설립한 현대그룹의 일원인 현대전자로 시작했습니다. 삼성전자와 함께 한국 반도체 산업의 발전을 이끌었지만, 1999년 LG반도체를 인수하면서 재무적 어려움에 처했습니다. 2001년부터 2011년까지 주인 없는 '암흑기'를 거친 후, 한국의 대기업인 SK그룹에 인수되었습니다. SK그룹은 R&D에 막대한 금액을 투자했고, 이를 통해 SK하이닉스는 HBM 시장에서 최첨단 리더십을 확보할 수 있었습니다.

AI 모델 개발에서 HBM의 중요성이 커지면서 SK하이닉스 HBM에 대한 기록적인 수요가 발생했습니다. 삼성전자와 마이크론 테크놀로지 같은 기업들이 추격하기 위해 막대한 자본을 투자했지만, SK하이닉스는 기술적 우위를 지켜낼 수 있었습니다. MR-MUF(Mass Reflow-Molded Underfill)는 SK하이닉스가 가진 기술적 강점 중 하나입니다. 반도체 칩 사이에 액체 보호제를 채워 넣음으로써, SK하이닉스는 경쟁사 대비 열 관리 효율이 10% 더 높은 HBM을 생산할 수 있습니다. 이러한 강점은 데이터 센터의 과열 방지에 고심하는 데이터 센터 기업들에게 하이닉스 제품이 매력적으로 다가가는 요인이 됩니다.

경쟁사 대비 우수한 기술력 덕분에 SK하이닉스는 AI 산업의 중심인 엔비디아(NVIDIA)에 HBM을 독점 공급하는 업체가 되었습니다. 삼성전자가 열 관리 벤치마크를 충족하는 데 지속적으로 실패하는 동안, SK하이닉스는 놀라운 매출 성장(2025년 47%)과 영업이익률(전년 대비 101% 성장)을 기록했습니다. 이는 DDR5와 SSD 가격 상승에 의해 가속화되었습니다.

2026년 SK하이닉스의 주당순이익(EPS)은 약 210%에서 250% 증가할 것으로 예상됩니다. 투자은행들은 현재 약 1,000,000원인 주가에서 30~40%의 추가 상승 여력이 있다고 보고 목표 주가를 상향 조정하고 있습니다.

EPS, 매출, 영업이익 성장이 인상적이지만, 지금과 같은 시기에는 주가를 하락시킬 수 있는 요인들에 대한 상세한 검토가 필요합니다.

SK하이닉스에 대한 우려는 삼성전자의 우려와 상당히 유사합니다. 메모리 제품에 대한 수요 확대가 주가를 기록적인 수준으로 끌어올렸지만, 이는 궁극적으로 AI 지출 증가와 그것이 지속 가능한 수익원이 될 수 있다는 내러티브에 묶여 있습니다. 만약 빅테크 기업들의 AI 인프라 지출 의지가 흔들리는 조짐이 보인다면, 메모리 기업들은 거대한 조정을 피할 수 없을 것입니다.

팹(Fab) 건설과 파운드리 사업 확장에 집중적으로 투자해 온 삼성전자와 달리, SK하이닉스는 이 분야에서 수익을 창출하는 능력이 부족합니다. 이러한 수익원이 없다는 것은 SK하이닉스가 삼성전자와 같은 경쟁사에 비해 더 경기 순환적(cyclical)일 가능성이 높다는 것을 의미합니다. 이는 조정 국면에서 SK하이닉스의 변동성을 더 키우는 요인이 될 수 있습니다.

*제공된 정보는 정보 제공 목적으로만 사용되며 금융 또는 투자 자문을 구성하지 않습니다. 모든 투자 결정은 전적으로 귀하의 책임하에 이루어집니다. 과거의 성과가 미래의 결과를 보장하지 않습니다.*
    `,
    date: 'Mar 10, 2026',
    ticker: 'KRX:000660',
    rating: 'Buy',
    imageUrl: 'https://images.unsplash.com/photo-1620283085439-39620a1e21c4?auto=format&fit=crop&q=80&w=1200&h=600'
  },
  {
    id: '4',
    title: 'Korean Air Lines: The Sky Blue Moat',
    title_ko: '대한항공: 하늘빛 신뢰의 해자',
    excerpt: 'Korean Air is transforming into a global mega-carrier through its merger with Asiana Airlines, strategically rebranding as a premium carrier with a diversifying business model.',
    excerpt_ko: '대한항공은 아시아나항공과의 합병을 통해 글로벌 메가 캐리어로 거듭나고 있으며, 프리미엄 항공사로의 전략적 재편과 사업 모델 다각화를 추진하고 있습니다.',
    content: `
# Korean Air Lines: The Sky Blue Moat

Korean Air Lines (KRX: 003490) is the largest commercial carrier in South Korea. Korean Air Lines have their roots in the government-owned Korean Air Lines. However, after years of inefficient operation and heavy debt, then President Park Chung-Hee privatized the company, handing over control to the Hanjin Group. led by its founder Cho Joong-Hoon. Hanjin Group was able to drastically restructure the company, transforming it into Korea’s largest commercial carrier.

Korean Air has been the center of attention in the airline industry in Korea with its takeover of Asiana Airlines, Korea's second largest commercial carrier. Korean Air Lines is expected to complete its merger with Asiana Airlines in 2027, beginning its journey as a mega carrier which sits 10th in the world for passenger capacity. 

While remaining the dominant commercial airliner in South Korea, Korean Air has experienced problems with profitability due to the weakening won, which leads to higher cost burden regarding oil purchases. Yet, even with increasing geopolitical uncertainty and fluctuating oil prices, Korean Air has managed to consistently grow its revenue. 

Because its stock price has been stuck between the 20,000 KRW and 30,000 KRW range after its rebound from COVID lows back in 2020, Korean Air arguably has limited downside risk. 

Korean Air is taking the merger with Asiana Airlines as an opportunity to strategically rebrand itself as a premium carrier. By introducing premium economy seats and cutting down on first class seats to place more business seats, the airline can reduce seats that are the least cost efficient. Along with the effects of economies of scale, it could be a turning point for Korean Air’s profitability decline. 

In 2025, Korean Air was able to turn a profit for the first time after 5 years of losses in its defense and aerospace department. This is the first sign of a shift towards a business model of stable revenue generation compared to focusing on a revenue source that is hugely impacted by seasonal changes. 

Compared to the low-cost carriers who are constantly pressured to choose quantity over quality, full-service carriers like Korean Air have the luxury of opting to become an airline that offers a distinct service for a premium price. Holding a monopoly over the FSC market in Korea certainly is a positive outlook for profitability in the future. 

Yet there are risks to look out for. Given the influence of the Korea Fair Trade Commission over the merger of Korean Air Lines and Asiana Airlines, future regulations regarding pricing power of Korean Air could delay any significant increases in profitability. On top of this, Sono Hotels & Resorts have acquired T’way Air, a leader in the LCC market in terms of passenger fleet size. Sono Hotel & Resorts ambition towards a completing a empire of hospitality services could mark a turn towards rebranding T’way Air as a FSC to compete with Korean Air. 

While above reasons may or may not materialize, but it seems undeniable that Korean Air’s experience and seniority in the market presents it with a wide moat of trust for customers. 

*The information provided is for informational purposes only and does not constitute financial or investment advice. Any investment decisions are made solely at your own risk. Past performance is not indicative of future results.*
    `,
    content_ko: `
# 대한항공: 하늘빛 신뢰의 해자

대한항공(KRX: 003490)은 대한민국 최대의 국적 항공사입니다. 대한항공의 뿌리는 국영 대한항공공사에 두고 있습니다. 그러나 수년간의 비효율적인 운영과 과도한 부채 이후, 당시 박정희 대통령은 회사를 민영화하여 창업주 조중훈 회장이 이끄는 한진그룹에 경영권을 넘겼습니다. 한진그룹은 회사를 획기적으로 구조조정하여 대한민국 최대의 상업 항공사로 탈바꿈시켰습니다.

대한항공은 한국 제2의 국적 항공사인 아시아나항공 인수를 통해 한국 항공업계의 중심에 서 있습니다. 대한항공은 2027년 아시아나항공과의 합병을 완료할 것으로 예상되며, 여객 수송 능력 기준 세계 10위권의 '메가 캐리어'로서의 여정을 시작할 것입니다.

대한항공은 한국의 지배적인 상업 항공사로 남아있지만, 원화 약세로 인한 유류비 부담 증가로 수익성 문제에 직면해 왔습니다. 그러나 지정학적 불확실성 증가와 유가 변동 속에서도 대한항공은 지속적으로 매출 성장을 이뤄냈습니다.

2020년 코로나19 저점 반등 이후 주가가 20,000원에서 30,000원 사이의 박스권에 머물러 있어, 대한항공은 하방 위험이 제한적이라고 볼 수 있습니다.

대한항공은 아시아나항공과의 합병을 프리미엄 항공사로 전략적으로 재브랜딩하는 기회로 삼고 있습니다. 프리미엄 이코노미 좌석을 도입하고, 비용 효율성이 가장 낮은 퍼스트 클래스 좌석을 줄이는 대신 비즈니스 좌석을 늘림으로써 수익성을 개선할 수 있습니다. 규모의 경제 효과와 함께 이는 대한항공의 수익성 하락을 반전시키는 전환점이 될 수 있습니다.

2025년, 대한항공은 방위 및 항공우주 부문에서 5년간의 손실 끝에 처음으로 흑자 전환에 성공했습니다. 이는 계절적 변화에 크게 영향을 받는 수익원에 집중하는 대신, 안정적인 수익 창출이 가능한 비즈니스 모델로의 전환을 알리는 첫 번째 신호입니다.

품질보다 양을 선택해야 하는 압박을 끊임없이 받는 저비용 항공사(LCC)와 달리, 대한항공과 같은 대형 항공사(FSC)는 프리미엄 가격에 차별화된 서비스를 제공하는 항공사가 될 수 있는 여유가 있습니다. 한국 FSC 시장에서 독점적 지위를 확보하는 것은 향후 수익성에 긍정적인 전망을 제공합니다.

하지만 주의해야 할 위험 요소도 있습니다. 대한항공과 아시아나항공의 합병에 대한 공정거래위원회의 영향력을 고려할 때, 대한항공의 가격 결정력에 대한 향후 규제는 수익성의 유의미한 증가를 지연시킬 수 있습니다. 또한, LCC 시장의 강자인 티웨이항공을 소노호텔앤리조트가 인수했습니다. 호스피탈리티 서비스 제국을 완성하려는 소노호텔앤리조트의 야망은 티웨이항공을 FSC로 재브랜딩하여 대한항공과 경쟁하게 만드는 변화로 이어질 수 있습니다.

위의 이유들이 현실화될 수도 있고 그렇지 않을 수도 있지만, 시장에서의 대한항공의 경험과 연륜은 고객들에게 넓은 신뢰의 해자(Moat)를 제공한다는 점은 부정할 수 없어 보입니다.

*제공된 정보는 정보 제공 목적으로만 사용되며 금융 또는 투자 자문을 구성하지 않습니다. 모든 투자 결정은 전적으로 귀하의 책임하에 이루어집니다. 과거의 성과가 미래의 결과를 보장하지 않습니다.*
    `,
    date: 'Mar 9, 2026',
    ticker: 'KRX:003490',
    rating: 'Buy',
    imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1200&h=600'
  },
  {
    id: '5',
    title: 'Samsung C&T: The Hidden Giant',
    title_ko: '삼성물산: 숨겨진 거인',
    excerpt: 'Samsung C&T, the de facto holding company of Samsung Group, is emerging as a secret winner in the market, benefiting from corporate value-up initiatives and its strategic position in the AI and nuclear energy sectors.',
    excerpt_ko: '삼성그룹의 실질적 지주사인 삼성물산은 기업 가치 제고 정책과 AI 및 원자력 에너지 분야에서의 전략적 위치를 바탕으로 시장의 \'숨은 승자\'로 떠오르고 있습니다.',
    content: `
# Samsung C&T: The Hidden Giant

Samsung C&T (KRX: 028260) was founded in 1938 by Lee Byung-Chul, the grandfather of Lee Jae-Yong, the current leader of the Samsung Group. It started as a small shop that exported dried fish, vegetables, and fruit to Manchuria and Beijing. This small shop eventually became Samsung Mulsan (Samsung C&T) in 1951. After helping rebuild South Korea following the Korean War, it rose to prominence when it was designated as Korea’s first General Trading Company (GTC) by the government. During the export-led expansion of Korea’s economy, which included overseas construction, it became world-renowned for its advanced construction and engineering expertise.

Samsung C&T became the center of attention in 2015 when it pushed through a controversial merger with Cheil Industries. At the time, the company's successor, Lee Jae-Yong, did not yet hold any Samsung C&T shares (which acts as a holding company for Samsung Electronics and other crucial companies in the Samsung family business). However, he did have a 23.2% ownership stake in Cheil Industries, which merged with Samsung C&T at a ratio where one Cheil share was equal to 0.35 Samsung C&T shares. This merger enticed one of the largest activist hedge funds, Elliott Investment Management, to acquire 7.12% of Samsung C&T and demand that the merger ratio be reconsidered. Elliott Investment Management brought the issue to court, arguing that the National Pension Service of South Korea approved the deal due to pressure from the president’s office.

Fast forward to the present: the Permanent Court of Arbitration recently decided to annul the payment the South Korean government was ordered to give to Elliott Management. Despite this complicated history, Samsung C&T’s stock was a "secret winner" in the markets last year, currently sitting 224% above its 2025 lows. It has benefited from recent amendments to the Commercial Act, which focus on boosting shareholder value.

While other companies that surged in value received most of the limelight, Samsung C&T remained in the shadows. However, this does not mean Samsung C&T lacks growth potential. As the de facto holding company of the Samsung Group, Samsung C&T holds significant stakes in various Samsung business ventures. It currently holds 43.1% of Samsung Biologics, approximately 5% of Samsung Electronics, and around 19.3% of Samsung Life Insurance, to name a few. Each of these companies is a leader in its respective industry. This allows Samsung C&T to reap benefits equivalent to a diversified stock portfolio filled with high-potential, low-risk companies.

On top of this, Samsung C&T’s experience in nuclear power plant construction, both at home and abroad, could make it a prime candidate for nuclear power projects aimed at addressing power shortages caused by energy-hungry data centers used for artificial intelligence. Integrating itself into the AI narrative could significantly boost its profitability and investor valuation.

At the time of writing, there seem to be no significant risks inherent in Samsung C&T’s business operations, as the domestic construction economy is bouncing back from its 2025 lows and Samsung Electronics is expected to expand its factories, which often yield highly profitable contracts for Samsung C&T.

*The information provided is for informational purposes only and does not constitute financial or investment advice. Any investment decisions are made solely at your own risk. Past performance is not indicative of future results.*
    `,
    content_ko: `
# 삼성물산: 숨겨진 거인

삼성물산(KRX: 028260)은 1938년 이병철 창업주에 의해 설립되었습니다. 그는 현재 삼성그룹의 총수인 이재용 회장의 조부입니다. 시작은 만주와 북경으로 건어물, 채소, 과일을 수출하던 작은 상점이었습니다. 이 작은 상점은 1951년 삼성물산(Samsung C&T)으로 거듭났습니다. 한국전쟁 이후 대한민국의 재건을 도우며 성장한 삼성물산은 정부에 의해 한국 최초의 종합상사(GTC)로 지정되면서 명성을 얻었습니다. 해외 건설을 포함한 한국 경제의 수출 주도형 확장기 동안, 삼성물산은 선진적인 건설 및 엔지니어링 전문성을 바탕으로 세계적인 명성을 쌓았습니다.

삼성물산은 2015년 제일모직과의 논란이 된 합병을 추진하며 세간의 주목을 받았습니다. 당시 삼성그룹의 승계자인 이재용 회장은 삼성전자와 삼성가 비즈니스의 핵심 기업들을 지배하는 지주회사 격인 삼성물산의 지분을 전혀 보유하고 있지 않았습니다. 대신 그는 제일모직 지분 23.2%를 보유하고 있었으며, 제일모직 1주당 삼성물산 0.35주의 비율로 합병이 진행되었습니다. 이 불공정해 보이는 합병 비율은 세계 최대 행동주의 헤지펀드 중 하나인 엘리엇 매니지먼트(Elliott Investment Management)가 삼성물산 지분 7.12%를 확보하고 합병 비율 재검토를 요구하게 만들었습니다. 엘리엇은 한국 정부의 압력으로 국민연금공단이 이 합병을 승인했다고 주장하며 법정 다툼을 벌였습니다.

현재로 돌아와서, 최근 상설중재재판소(PCA)는 한국 정부가 엘리엇에 지급해야 했던 배상금 판결을 취소하기로 결정했습니다. 이러한 복잡한 역사에도 불구하고, 삼성물산의 주가는 지난해 시장의 '숨은 승자'였습니다. 현재 주가는 2025년 저점 대비 224% 상승한 상태입니다. 이는 주주 가치 제고에 초점을 맞춘 상법 개정안의 혜택을 받은 결과이기도 합니다.

급등한 다른 기업들이 주목을 받는 동안 삼성물산은 상대적으로 가려져 있었습니다. 하지만 이것이 삼성물산의 성장 잠재력이 부족하다는 의미는 아닙니다. 삼성그룹의 실질적인 지주회사로서 삼성물산은 각 사업 부문에서 상당한 지분을 보유하고 있습니다. 삼성바이오로직스 지분 43.1%, 삼성전자 지분 약 5%, 삼성생명 지분 약 19.3% 등을 보유하고 있으며, 이들은 모두 각 산업의 선두주자들입니다. 이를 통해 삼성물산은 고성장, 저위험 기업들로 구성된 다각화된 포트폴리오와 유사한 수익을 누릴 수 있습니다.

여기에 더해, 국내외 원자력 발전소 건설 경험은 인공지능(AI) 운영에 필요한 데이터 센터의 전력 부족 문제를 해결하기 위한 원전 프로젝트에서 삼성물산을 유력한 후보로 만듭니다. AI 내러티브에 통합되는 것은 수익성과 기업 가치 평가에 큰 도움이 될 것입니다.

집필 시점을 기준으로 삼성물산의 사업 운영에는 큰 위험 요소가 보이지 않습니다. 국내 건설 경기가 2025년 저점에서 반등하고 있으며, 삼성전자의 공장 증설은 삼성물산에 수익성 높은 계약을 안겨줄 것으로 기대되기 때문입니다.

*제공된 정보는 정보 제공 목적으로만 사용되며 금융 또는 투자 자문을 구성하지 않습니다. 모든 투자 결정은 전적으로 귀하의 책임하에 이루어집니다. 과거의 성과가 미래의 결과를 보장하지 않습니다.*
    `,
    date: 'Mar 8, 2026',
    ticker: 'KRX:028260',
    rating: 'Buy',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=600'
  },
  {
    id: '6',
    title: 'Mirae Asset Securities: From a Regional Powerhouse to a Global Powerhouse',
    title_ko: '미래에셋증권: 지역 강자에서 글로벌 강자로',
    excerpt: 'From its humble beginnings during the Asian Financial Crisis to becoming a global financial giant with $800 billion AUM, Mirae Asset Securities is perfectly positioned to lead Korea\'s "Abenomics" moment.',
    excerpt_ko: '아시아 금융 위기 당시의 미미한 시작부터 운용자산(AUM) 8,000억 달러 규모의 글로벌 금융 거인으로 성장하기까지, 미래에셋증권은 한국의 "아베노믹스" 순간을 이끌 완벽한 위치에 있습니다.',
    content: `
# Mirae Asset Securities: From a Regional Powerhouse to a Global Powerhouse

Mirae Asset Securities (KRX: 006800) was born during the Asian Financial Crisis, a period where the South Korean economy was crashing. In 1998 Park Hyeon-Joo, who founded Mirae Asset Financial Group, launched the “Park Hyeon-Joo No.1”, which was South Korea’s first retail mutual fund. The fund is often praised as a pioneer in bringing funds historically locked in savings to the market. Mirae Asset was also the first to establish an overseas office, opening a subsidiary in Hong Kong in 2003. After listing on the KOSPI (2006), it rapidly expanded its operations around the world, opening offices in China, India, the UK, Brazil, and Singapore. During the 2010s and 2020s, Mirae Asset merged and acquired companies like KDB Daewoo Securities, Global X ETFs, Sharekhan, positioning itself as a giant in the South Korean finance industry. As of 2026, Mirae Asset operates in 19 markets around the world, actively managing hundreds of ETFs, and reaching an AUM of around $800 billion dollars. 

With South Korea’s stock market booming after the government push for amendments to the Commercial Code, Mirae Asset Securities is in the golden spot to reap the benefits of this structural change. The current structural reforms being made to the commercial code share similarities to Shinzo Abe’s “Abenomics”, which focused on revitalizing the Japanese economy by overhauling corporate behavior. This change made it more attractive to foreign investors, making companies more liable to their shareholders, and breaking the “Keiretsu”, which protected owners from shareholder pressure. It is arguable that the “상법개정” (changes in the commercial code) of 2025 could be the Abe moment for Korea, which can lead to sustained growth in the stock market. 

In 2025, Mirae Asset Securities (the investment banking and brokerage branch) reported total revenue of 29.28 trillion KRW, a 31.7% increase compared to 2024. This revenue was driven by record levels of trading volume in the domestic market and a 200% surge in pretax profit from its overseas subsidiaries. It also achieved a YoY operating profit increase of 61.2%, and net profit jumped 72.2% to 1.59 trillion KRW. 

On top of impressive revenue, Mirae Asset’s $400 million bet on SpaceX between 2022 and 2023 is garnering excitement as SpaceX prepares for a potential IPO. With current valuations of approximately $1.25 trillion, an IPO suggest around 600 billion KRW of unrealized revenue for Mirae Asset Financial Group.

As the Korean stock market becomes more mature with previously mentioned changes to the commercial act and head towards a culture of boosting shareholder value, Mirae Asset Securities can be expected to reap the benefits during the process.

*The information provided is for informational purposes only and does not constitute financial or investment advice. Any investment decisions are made solely at your own risk. Past performance is not indicative of future results.*
    `,
    content_ko: `
# 미래에셋증권: 지역 강자에서 글로벌 강자로

미래에셋증권(KRX: 006800)은 한국 경제가 붕괴하던 아시아 금융 위기 중에 탄생했습니다. 1998년 미래에셋금융그룹을 창업한 박현주 회장은 한국 최초의 리테일 뮤추얼 펀드인 "박현주 1호"를 출시했습니다. 이 펀드는 역사적으로 저축에 묶여 있던 자금을 시장으로 끌어들이는 데 선구적인 역할을 했다는 평가를 받습니다. 미래에셋은 또한 2003년 홍콩에 현지 법인을 설립하며 해외 사무소를 개설한 최초의 기업이기도 합니다. 2006년 코스피 상장 이후 중국, 인도, 영국, 브라질, 싱가포르 등에 사무소를 열며 전 세계적으로 사업을 빠르게 확장했습니다. 2010년대와 2020년대에 걸쳐 미래에셋은 KDB대우증권, 글로벌 X(Global X) ETF, 쉐어칸(Sharekhan) 등을 인수 합병하며 한국 금융 산업의 거인으로 자리매김했습니다. 2026년 현재 미래에셋은 전 세계 19개 시장에서 운영되고 있으며, 수백 개의 ETF를 적극적으로 관리하며 약 8,000억 달러의 운용자산(AUM)을 보유하고 있습니다.

정부의 상법 개정 추진 이후 한국 주식 시장이 호황을 누리면서, 미래에셋증권은 이러한 구조적 변화의 혜택을 누릴 수 있는 황금 같은 위치에 있습니다. 현재 진행 중인 상법 개정 등의 구조적 개혁은 기업 행태를 전면 개편하여 일본 경제를 활성화하는 데 초점을 맞췄던 신조 아베의 "아베노믹스"와 유사점을 공유합니다. 이러한 변화는 외국인 투자자들에게 더 매력적으로 다가갔고, 기업들이 주주들에게 더 책임감을 갖게 했으며, 주주들의 압력으로부터 소유주를 보호하던 "게이레츠(계열)" 구조를 깨뜨렸습니다. 2025년의 상법 개정은 한국의 '아베 모먼트'가 될 수 있으며, 이는 주식 시장의 지속적인 성장을 이끌 수 있습니다.

2025년 미래에셋증권(투자은행 및 브로커리지 부문)은 2024년 대비 31.7% 증가한 29조 2,800억 원의 총 매출을 기록했습니다. 이 매출은 국내 시장의 기록적인 거래량과 해외 법인의 세전 이익 200% 급증에 힘입은 것입니다. 또한 전년 대비 영업이익은 61.2% 증가했으며, 순이익은 72.2% 급증한 1조 5,900억 원을 기록했습니다.

인상적인 매출 외에도, 2022년과 2023년 사이 미래에셋이 스페이스X(SpaceX)에 투자한 4억 달러는 스페이스X가 잠재적인 IPO를 준비함에 따라 큰 기대를 모으고 있습니다. 현재 약 1조 2,500억 달러의 기업 가치를 고려할 때, IPO는 미래에셋금융그룹에 약 6,000억 원의 미실현 수익을 안겨줄 것으로 예상됩니다.

앞서 언급한 상법 개정과 함께 한국 주식 시장이 더욱 성숙해지고 주주 가치를 높이는 문화로 나아감에 따라, 미래에셋증권은 그 과정에서 큰 혜택을 입을 것으로 기대됩니다.

*제공된 정보는 정보 제공 목적으로만 사용되며 금융 또는 투자 자문을 구성하지 않습니다. 모든 투자 결정은 전적으로 귀하의 책임하에 이루어집니다. 과거의 성과가 미래의 결과를 보장하지 않습니다.*
    `,
    date: 'Mar 7, 2026',
    ticker: 'KRX:006800',
    rating: 'Buy',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200&h=600'
  },
  {
    id: '7',
    title: 'HD Hyundai: Powering the Energy Transition',
    title_ko: 'HD현대: 에너지 전환의 동력',
    excerpt: 'From shipbuilding to hydrogen energy, HD Hyundai is pivoting towards a sustainable future with record order backlogs.',
    excerpt_ko: '조선에서 수소 에너지에 이르기까지, HD현대는 기록적인 수주 잔고를 바탕으로 지속 가능한 미래를 향해 나아가고 있습니다.',
    content: `
# HD Hyundai: Powering the Energy Transition

HD Hyundai (KRX:267250) is transforming from a traditional heavy industry giant into a green energy technology leader. Its subsidiaries are dominating the global market for eco-friendly ships and high-voltage power equipment.

## 1. Shipbuilding Dominance
HD Korea Shipbuilding & Offshore Engineering (KSOE) holds a record backlog of LNG and methanol-powered vessels. With environmental regulations tightening, the premium for "green ships" is driving record margins.

## 2. Electric Power Systems
HD Hyundai Electric is benefiting from the global grid modernization and the massive power demand from AI data centers. Order backlogs for high-voltage transformers now stretch into 2029.

## 3. The Hydrogen Vision
The group is investing heavily in the "Hydrogen Dream," aiming to build a complete value chain from production to transport and utilization by 2030.
    `,
    content_ko: `
# HD현대: 에너지 전환의 동력

HD현대(KRX: 267250)는 전통적인 중공업 거인에서 친환경 에너지 기술 리더로 변모하고 있습니다. 그 계열사들은 친환경 선박과 고압 전력 설비 분야에서 글로벌 시장을 장악하고 있습니다.

## 1. 조선 분야의 지배력
HD한국조선해양(KSOE)은 LNG 및 메탄올 추진선 분야에서 기록적인 수주 잔고를 보유하고 있습니다. 환경 규제가 강화됨에 따라 "친환경 선박"에 대한 프리미엄이 기록적인 수익성을 견인하고 있습니다.

## 2. 전력 시스템
HD현대일렉트릭은 글로벌 그리드 현대화와 AI 데이터 센터의 막대한 전력 수요로부터 혜택을 받고 있습니다. 고압 변압기의 수주 잔고는 현재 2029년까지 이어져 있습니다.

## 3. 수소 비전
그룹은 "수소 드림"에 막대한 투자를 하고 있으며, 2030년까지 생산에서 운송, 활용에 이르는 완전한 가치 사슬을 구축하는 것을 목표로 하고 있습니다.

*제공된 정보는 정보 제공 목적으로만 사용되며 금융 또는 투자 자문을 구성하지 않습니다. 모든 투자 결정은 전적으로 귀하의 책임하에 이루어집니다. 과거의 성과가 미래의 결과를 보장하지 않습니다.*
    `,
    date: 'Mar 6, 2026',
    ticker: 'KRX:267250',
    rating: 'Buy',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200&h=600'
  }
];
