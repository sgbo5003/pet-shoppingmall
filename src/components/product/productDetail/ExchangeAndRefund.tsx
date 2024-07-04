import React from "react";

const ExchangeAndRefund = () => {
  return (
    <div className="border border-[#eaeaea] min-h-[200px] pt-50 px-55 pb-70">
      <h3 className="mt-25 mx-0 mb-15 pt-5 px-10 pb-5 text-[15px] text-[#000] font-bold">
        교환 및 반품안내
      </h3>
      <div className="leading-[1.8] break-all text-[13px] text-[#777]">
        <p className="mb-3">
          - 상품 택(tag)제거 또는 개봉으로 상품 가치 훼손 시에는
          상품수령후&nbsp;
          <strong>
            7일 이내라도 교환 및 반품이 불가능합니다.(대형견하우스, 울타리,
            패드, 박스채 출고되는 하우스 등)
          </strong>
        </p>
        <p className="mb-3">
          - 저단가 상품, 일부 특가 상품은 고객 변심에 의한 교환, 반품은 고객께서
          배송비를 부담하셔야 합니다(제품의 하자,배송오류는 제외)
        </p>
        <p className="mb-3">
          - 일부 상품은 신모델 출시, 원재료가격 변동 등 제조사 사정으로 가격이
          변동될 수 있습니다.
        </p>
        <p className="mb-3">
          - 공장에서 박스자체가 상품으로 출고되는 제품에 대하여서는 박스개봉후
          중고상품으로 간주되어 교환이나 반품이 불가능합니다. (이동켄넬,
          대형배변판, 박스포장된 수제사료 등)
        </p>
      </div>
      <h3 className="mt-25 mx-0 mb-15 pt-5 px-10 pb-5 text-[15px] text-[#000] font-bold">
        환불안내
      </h3>
      <div className="leading-[1.8] break-all text-[13px] text-[#777]">
        <p className="mb-3">
          - 상품 청약철회 가능기간은 상품 수령일로 부터
          <b>7일 이내</b>
        </p>
        <p className="mb-3">
          - 단순 변심 및 불량에 의한 교환 및 반품은 식품을 포함한 전제품 모두
          <strong>7일 이후에는 불가능 하십니다.</strong>
        </p>
        <p className="mb-3">
          - 개봉흔적이나 사용흔적, 텍이제거나거나 식품같은 경우엔 개봉후에는
          환불과 교환이 모두 불가능 합니다.
        </p>
        <p className="mb-3">
          - 대형견용 제품이나 박스채로 발송이 되는 재포장 상품이 아닌,
          공장출고박스 그대로 출고가 되는 제품은
          <strong>
            박스개봉후에는 중고상품으로 간주되어 재판매가 불가능할 경우가
            있습니다.
          </strong>
        </p>
        <p className="mb-3">
          &nbsp;
          <strong>
            (대형견하우스, 이동켄넬, 배변판, 기저귀 및 패드, 울타리 등)
          </strong>{" "}
          이런 제품들은 단순변심에 의한 교환이나 환불이 불가능합니다.
        </p>
        <p className="mb-3">
          &nbsp; 세부사이즈를 꼼꼼히 확인하시고 주문 부탁드립니다.
        </p>
      </div>
      <h3 className="mt-25 mx-0 mb-15 pt-5 px-10 pb-5 text-[15px] text-[#000] font-bold">
        AS안내
      </h3>
      <div className="leading-[1.8] break-all text-[13px] text-[#777]">
        <p className="mb-3">
          - 소비자분쟁해결 기준(공정거래위원회 고시)에 따라 피해를 보상받을 수
          있습니다.
        </p>
        <p className="mb-3">
          - A/S는 고객센터에서 접수 및 처리를 도와드립니다. 게시판을 이용하셔도
          빠른 처리 도와드리고 있습니다.
        </p>
      </div>
      <h3 className="mt-25 mx-0 mb-15 pt-5 px-10 pb-5 text-[15px] text-[#000] font-bold">
        배송안내
      </h3>
      <div className="leading-[1.8] break-all text-[13px] text-[#777]">
        <p className="mb-3">
          - 배송비 : 기본배송료는 2,000원 입니다. (도서,산간,오지 일부지역은
          배송비가 추가될 수 있습니다)
        </p>
        <p className="mb-3">
          - 30,000원 이상 구매시 무료배송입니다. [제주도 배송비 3천원 추가]
        </p>
        <p className="mb-3">
          - 기본적으로 평일오후 4시이전 주문건은 당일출고를 원칙으로
          배송준비하고 있습니다. (재고가 부족하거나 창고/수입사에서 바로
          발송되시는 제품은 1-2일정도 배송일이 더 소요될 수 있습니다.]
        </p>
        <p className="mb-3">
          - 상품의 평균 배송일은 1-3일입니다. (입금 확인 후) 배송사의 사정에
          따라 유동적일 수 있으며 배송일 지정은 불가능합니다.
        </p>
        <p className="mb-3">
          [배송예정일은 주문시점(주문순서)에 따른 유동성이 발생하므로 평균
          배송일과는 차이가 발생할 수 있습니다.]
        </p>
      </div>
    </div>
  );
};

export default ExchangeAndRefund;
