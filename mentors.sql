/*테이블 */

--- yongje -------------------------------------------------------------------------------------------------------------------------
-- job 테이블 create문
create table job (
    job_code varchar2(20) primary key,  -- 직무코드(PK)
    job_type varchar2(100) not null     -- 직무유형
);

-- mentoring 테이블 create문
create table mentoring (
    mentoring_code varchar2(20) primary key,    -- 멘토링코드(PK)
    mentoring_type varchar2(30) not null        -- 멘토링유형
);

-- meetingboard 테이블 create문
create table meetingboard (
    meetingboard_seq            number,         -- 모임번호(PK)
    job_code                    varchar2(20),   -- 직무분야(FK)
    meetingboard_title          varchar2(500),  -- 제목
    meetingboard_subtitle       varchar2(1000), -- 부제목
    meetingboard_content        varchar2(4000), -- 내용
    meetingboard_day            varchar2(50),   -- 일시
    meetingboard_starthour      varchar2(30),   -- 시작시간
    meetingboard_endhour        varchar2(30),   -- 종료시간
    meetingboard_address        varchar2(50),   -- 장소
    meetingboard_buildingname   varchar2(50),   -- 건물이름
    meetingboard_address_x      varchar2(50),   -- 위도
    meetingboard_address_y      varchar2(50),   -- 경도
    meetingboard_count          number,         -- 모집인원
    meetingboard_host           varchar2(50),   -- 주최
    meetingboard_price          number,         -- 참가비
    mentor_email                varchar2(100),   -- 멘토이메일(FK)
    meetingboard_state          number  default 0, -- 상태
    constraint PK_MEETINGBOARD  primary key(meetingboard_seq),
    constraint FK_MEETINGBOARD1 foreign key(job_code) references job(job_code),
    constraint FK_MEETINGBOARD2 foreign key(mentor_email) references mentors_member(member_email)
);
select * from mentor;


-- meetingboard 시퀀스
create sequence meetingboard_seq nocache nocycle;

-- 안내사항 테이블
create table guide(
    guide_content   varchar2(1000),
    logtime date default sysdate
);
drop table meeting_order;
-- 모임신청 테이블
create table meeting_participation(
    participation_seq       number,         -- 신청 seq
    meetingboard_seq        number,         -- 모임 seq
    mentee_email            varchar2(100),  -- 멘티 email
    mentee_name             varchar2(50),   -- 멘티 이름
    mentor_email            varchar2(100),  -- 멘토 email
    mentor_name             varchar2(50),   -- 멘토 이름
    participation_address   varchar2(50),   -- 거주지
    participation_question  varchar2(2000), -- 사전질문
    participation_state     number default 0, -- 결제상태
    constraint FK_MEETING_PARTICIPATION1 foreign key(meetingboard_seq) references meetingboard(meetingboard_seq),
    constraint FK_MEETING_PARTICIPATION2 foreign key(mentee_email) references mentors_member(member_email),
    constraint FK_MEETING_PARTICIPATION3 foreign key(mentor_email) references mentors_member(member_email)
);
-- 모임신청 시퀀스
create sequence participation_seq nocache nocycle;

-- 모임 주문
create table meeting_order (
    order_id          varchar2(100),        -- 주문ID
    order_date        date default sysdate, -- 주문일자
    order_price       number,               -- 총 가격
    mentee_email      varchar2(100),        -- 멘티 email
    mentee_name       varchar2(50),         -- 멘티 이름
    mentee_tel        varchar2(50),         -- 멘티 전화번호
    meetingboard_seq  number,               -- 모임 seq
    participation_seq number,               -- 신청 seq
    constraint FK_MEETING_ORDER1 foreign key(meetingboard_seq) references meetingboard(meetingboard_seq),
    constraint FK_MEETING_ORDER2 foreign key(mentee_email) references mentors_member(member_email)
);
------------------------------------------------------------------------------------------------------------------------------------------------------------
-- job 테이블 insert문
insert into job values ('job_code_0', '인사/총무/노무');
insert into job values ('job_code_1', '마케팅/MD');
insert into job values ('job_code_2', '홍보/CSR');
insert into job values ('job_code_3', '영업/영업관리');
insert into job values ('job_code_4', '회계/재무/금융');
insert into job values ('job_code_5', '해외/기술영업');
insert into job values ('job_code_6', '유통/무역/구매');
insert into job values ('job_code_7', '전략/기획');
insert into job values ('job_code_8', 'IT개발');
insert into job values ('job_code_9', '서비스 기획/UI/UX');
insert into job values ('job_code_10', '디자인/예술');
insert into job values ('job_code_11', '미디어');
insert into job values ('job_code_12', '서비스');
insert into job values ('job_code_13', '연구/설계');
insert into job values ('job_code_14', '전문/특수');
insert into job values ('job_code_15', '교육/상담/컨설팅');
insert into job values ('job_code_16', '공무원/공공/비영리');
insert into job values ('job_code_17', '생산/품질/제조');
insert into job values ('job_code_18', '기타 사무');

-- mentoring 테이블 insert문
insert into mentoring values ('mentoring_code_0','직무');
insert into mentoring values ('mentoring_code_1','진로');
insert into mentoring values ('mentoring_code_2','스펙');
insert into mentoring values ('mentoring_code_3','외국어');
insert into mentoring values ('mentoring_code_4','면접/자소서');
insert into mentoring values ('mentoring_code_5','회사생활');
insert into mentoring values ('mentoring_code_6','창업');
insert into mentoring values ('mentoring_code_7','이직');
insert into mentoring values ('mentoring_code_8','기타');

-- 안내사항 insert 문
insert into guide(guide_content) values ('사전 취소는 2일 전까지 가능합니다.');
insert into guide(guide_content) values ('무단 No-Show 시에는 참여 신청이 제한됩니다.');
insert into guide(guide_content) values ('주차지원은 불가능하니 대중교통을 이용해 주세요.');


---yangJaewoo-----------------------------------------------------------------------------------------------------
--멘티게시판 테이블
CREATE TABLE menteeboard(
     menteeboard_seq NUMBER primary key,            -- 글번호
     menteeboard_profile varchar2(200),             -- 프로필 사진
     menteeboard_nickname VARCHAR2(40) NOT NULL,    -- 이름
     menteeboard_email VARCHAR2(40),                -- 이메일
     menteeboard_title VARCHAR2(255) NOT NULL,      -- 제목
     menteeboard_content VARCHAR2(4000) NOT NULL,   -- 내용
     job_code VARCHAR2(40),                         -- 직무유형
     menteeboard_good NUMBER DEFAULT 0,             -- 좋아요

     menteeboard_ref NUMBER NOT NULL,               -- 그룹번호
     menteeboard_lev NUMBER DEFAULT 0 NOT NULL,     -- 단계
     menteeboard_step NUMBER DEFAULT 0 NOT NULL,    -- 글순서
     menteeboard_pseq NUMBER DEFAULT 0 NOT NULL,    -- 원글번호
     menteeboard_reply NUMBER DEFAULT 0 NOT NULL,   -- 답변수

     menteeboard_hit NUMBER DEFAULT 0,              -- 조회수
     menteeboard_logtime DATE DEFAULT SYSDATE
 );
 create SEQUENCE menteeboard_seq nocache nocycle;
     menteeboardLike_mb_seq NUMBER NOT NULL,         --좋아요 누른 menteeboard_seq값 저장
     menteeboardLike_mb_email VARCHAR2(40) NOT NULL  --좋아요 누른 menteeboard_email값 저장
);

 -- 게시글 댓글 테이블
 CREATE TABLE menteeboardReply(
      menteeboardReply_seq NUMBER PRIMARY KEY,            -- 댓글 번호
      menteeboardReply_mb_seq NUMBER NOT NULL,            -- 댓글 쓴 게시물 seq 저장
      menteeboardReply_profile varchar2(200),             -- 댓글 쓴 프로필 사진
      menteeboardReply_nickname VARCHAR2(40) NOT NULL,    -- 댓글 쓴 닉네임
      menteeboardReply_email VARCHAR2(40) NOT NULL,       -- 댓글 쓴 이메일
      menteeboardReply_content VARCHAR(1000) NOT NULL,    -- 댓글내용

      menteeboardReply_ref NUMBER NOT NULL,               -- 그룹번호
      menteeboardReply_lev NUMBER DEFAULT 0 NOT NULL,     -- 단계
      menteeboardReply_step NUMBER DEFAULT 0 NOT NULL,    -- 글순서
      menteeboardReply_pseq NUMBER DEFAULT 0 NOT NULL,    -- 원글번호
      menteeboardReply_logtime DATE DEFAULT SYSDATE
);
create SEQUENCE menteeboardReply_seq nocache nocycle;


CREATE TABLE essayboardScrap(
    essayboardScrap_es_seq NUMBER NOT NULL,           -- 에세이 seq
    essayboardScrap_mem_email VARCHAR2(40) NOT NULL,   -- 로그인 이메일
    essatboardScrap_logtime DATE DEFAULT SYSDATE
);
commit;
select * from essayboardScrap;
select * from essayboard;
 --송현--------------------------------------------------------------------------------------------------------
 create table mentors_member(
member_name varchar2(50) not null,
member_nickname varchar2(50) not null,
member_email varchar2(100)  primary key,
member_pwd varchar2(100) not null,
member_flag number DEFAULT 0);

---junhyeok----------------------------------------------------------------------------------------------------
-- 멘토
create table mentor(
 mentor_seq number primary key,         -- 멘토 번호
 mentor_company varchar2(100) not null,      -- 회사
 mentor_department varchar2(100) not null,   -- 부서
 mentor_position varchar2(100) not null,   -- 직급
 job_code varchar2(100) not null,      -- 직무유형
 mentor_school varchar2(100),   -- 학교
 mentor_career varchar2(4000) not null,      -- 경력
 mentoring_code varchar2(4000) not null,   --멘토링 코드
 mentor_represent varchar2(1000) not null,   -- 대표적인 분야
 mentor_info varchar2(4000) not null,      -- 멘토 소개
 mentor_etc varchar2(4000),   -- 기타사항
 mentor_email varchar2(200) not null,      -- 이메일
 mentor_selectNaming varchar2(200) not null,   -- 실명 공개여부 선택
 mentor_businesscard varchar2(2000) not null,   -- 명함.img
 mentor_badge number DEFAULT 0,         -- 뱃지
 mentor_flag number DEFAULT 0,         -- 상태
 mentor_logtime date default sysdate,      -- 날짜
 foreign key(job_code)
 references job(job_code),
 foreign key(mentor_email)
 references mentors_member(member_email)
);

create sequence mentor_seq nocache nocycle;	-- 멘토 sequence

-- 멘티 학생
create table menteestudent_profile(
    menteestudent_school varchar2(1000),            -- 학교
    menteestudent_major varchar2(500) not null,     -- 전공
    menteestudent_state varchar2(100) not null,     -- 재학/졸업
    menteestudent_grade varchar2(100),              -- 학년
    menteestudent_spec varchar2(4000) not null,     -- 스펙
    menteestudent_etc varchar2(4000),               -- 기타사항
    menteestudent_email varchar2(200) not null,     -- 이메일
    foreign key(menteestudent_email)
    references mentors_member(member_email));

-- 멘티 직장인
create table menteeemployee_profile(
    menteeemployee_year number not null,            -- 년차
    menteeemployee_final varchar2(100) not null,    -- 최종학력
    menteeemployee_school varchar2(1000),           -- 출신학교
    menteeemployee_career varchar2(4000) not null,  -- 경력
    menteeemployee_etc varchar2(4000),              -- 기타사항
    menteeemployee_email varchar2(200) not null,    -- 이메일
    foreign key(menteeemployee_email)
    references mentors_member(member_email));
                              
----taehyeong--------------------------------------------------------------------------------------------------------------------
-- 에세이 보드 생성
create table essayboard(
    essayboard_seq number primary key, -- 에세이 시퀀스 PK
    mentor_email varchar2(100) , -- 멘토 이메일 
    job_code varchar2(100),
    essayboard_title varchar2(1000) not null, -- 에세이 제목
    essayboard_content varchar2(4000) not null, -- 에세이 내용
    essayboard_hit number default 0 , -- 에세이 조회수
    essayboard_scrap number default 0,  -- 에세이 즐겨찾기
    essayboard_scrapFlag number default 0,
    constraint essay_job foreign key(job_code) references job(job_code), -- 에세이 잡 코드 FK
    essayboard_logtime date default sysdate
);
select * from essayboardScrap;
commit;


update essayboard set essayboard_scrap=(select count(*) from essayboardScrap where essayScrap_es_seq = 2)
where essayboard_seq = 2;


select * from essayboard;
-- 에세이 보드 시퀀스 생성
create sequence essayboard_seq
nocache
nocycle;

select * from essayboard;

---sanggu--------------------------------------------------------------------------------------------------------------------------
-- 공지사항 테이블     
create table noticeboard(
noticeboard_seq number not null,
noticeboard_adminEmail varchar2(200) not null,
noticeboard_title varchar2(2000) not null,
noticeboard_content varchar2(4000) not null,
noticeboard_hit number default 0,
noticeboard_logtime date default sysdate
);

--공지사항 sequence생성
create SEQUENCE noticeboard_seq nocache nocycle;



-- ㅇㅕㄴ습 -----------------------------------------------------------------------------------------------------------------------------
create table mentor(
 mentor_seq number primary key,         -- 멘토 번호
 mentor_company varchar2(100) not null,      -- 회사
 mentor_department varchar2(100) not null,   -- 부서
 mentor_position varchar2(100) not null,   -- 직급
 job_code varchar2(100) not null,      -- 직무유형
 mentor_school varchar2(100) DEFAULT null,   -- 학교
 mentor_career varchar2(4000) not null,      -- 경력
 mentoring_code varchar2(4000) not null,   --멘토링 코드
 mentor_represent varchar2(1000) not null,   -- 대표적인 분야
 mentor_info varchar2(4000) not null,      -- 멘토 소개
 mentor_etc varchar2(4000) DEFAULT null,   -- 기타사항
 mentor_email varchar2(200) not null,      -- 이메일
 mentor_selectNaming varchar2(200) not null,   -- 실명 공개여부 선택
 mentor_businesscard varchar2(2000) not null,   -- 명함.img
 mentor_badeg number DEFAULT 0,         -- 뱃지
 mentor_flag number DEFAULT 0,         -- 상태
 mentor_logtime date default sysdate,      -- 날짜
 foreign key(job_code)
 references job(job_code),
 foreign key(mentoring_code)
 references mentoring(mentoring_code),
 foreign key(mentor_email)
 references mentors_member(member_email)
);
drop table mentor;
commit;
create sequence mentor_seq nocache nocycle;

select * from essayboardScrap;

insert into mentor(
    mentor_seq,         -- 멘토 번호
    mentor_company,      -- 회사
     mentor_department,   -- 부서
     mentor_position,   -- 직급
     job_code,      -- 직무유형
     mentor_school,   -- 학교
     mentor_career,      -- 경력
     mentoring_code,   --멘토링 코드
     mentor_represent,   -- 대표적인 분야
     mentor_info,      -- 멘토 소개
     mentor_etc,   -- 기타사항
     mentor_email,      -- 이메일
     mentor_selectNaming,   -- 실명 공개여부 선택
     mentor_businesscard,   -- 명함.img
     mentor_badeg,         -- 뱃지
     mentor_flag,         -- 상태
     mentor_logtime
)
values
(   
    mentor_seq.nextval,
    '현대홈쇼핑',
    '고객보호팀',
    '직원',
    'job_code_9',
    '알수없음',
    '현) 현대홈쇼핑 고객보호팀 소속
전) 현대홈쇼핑 고객 보호팀 인턴
전) 인피니언 코리아 HR
전) 이베이 코리아 전략영업본부 인턴
전) 데일리 금융그룹 마케팅 팀 인턴
전) 토스랩 잔디 마케팅 팀 인턴
전) 크리에이티브 아레나 마케팅 팀 인턴
전) 삼성 SDS 집합서비스 그룹 인턴
대외 활동) KT&G 상상 마케팅 스쿨 8기 대상, 삼성 드림클래스 우수 강사, CJ전략PT 경진 입상 外 입상 경력 다수, 한국경제신문 KUSEF 포럼 교육 수료, 제1회 옐로마케톤 입상 등
강의활동) 2016 미래창조과학부 주관 스타트업 마케팅 (한양대 강의)',
    'mentoring_code_4',
    '핀테크/이커머스/창업/취업/자소서/면접/대외활동/스타트업/외국계/마케팅/전략기획/인하우스/에이전시/',
    '[모두의 자존감 지킴이 :) ]
7번의 인턴, 50번의 공모전, 3번의 창업 경험을 통해
누구도 걷지 않는 길을 걸으며 "내 삶의 궤적이 타인에게 힘이 되길"이란
신조로 살아가고 있는, 제너럴리스트 선임 강승훈입니다.

6년째 소수 정예로 고등학생 및 대학생들을 대상으로 멘토링 중이며,
국내 대기업, 외국계 대기업, 스타트업, 직접 창업 경험을 해보았고
HR, 마케팅, 서비스 기획, 교육, 전략 컨설팅, 에이전시 분야의 경험을 통해 취업과 진로 앞에 고민하는 친구들에게 최적화된 조언을 해줄 자신이 있습니다. 또한 퍼실리테이팅 전문 강사 교육 이수해 일방적 조언이 아닌 친구, 동네 형, 친오빠 같은 상담도 가능합니다.

페이스북 (운영 중인 페이지) : 하루5분 기획/마케팅/자기계발',
'제가 겪어왔던 어설픔과 어려움들을 공유하며
가장 따뜻하고 빠르게 취준생들의 고민을 해결해주고자 가입했습니다.',
'didwodn82@naver.com',
'알수없음',
'알수없음',
'0',
'2',
sysdate 
);
SET DEFINE OFF;

SELECT
            *
        FROM
         (
          SELECT
              ROWNUM rn, tt.*
          FROM
              (
                  SELECT
                      e.*,
                      j.job_type,
                      mm.member_name,
                      mt.mentor_company,
                      mt.mentor_department,
                      mt.mentor_represent,
                      mtr.mentoring_code,
                      mtr.mentoring_type
                  FROM
                      essayboard       e,
                      job              j,
                      mentor           mt,
                      mentoring        mtr,
                      mentors_member   mm
                  WHERE
                      e.job_code = j.job_code
                      AND e.mentor_email = mt.mentor_email
                      AND mt.mentor_email = mm.member_email
                      AND mt.mentoring_code = mtr.mentoring_code
                  ORDER BY
                      e.essayboard_hit DESC
              ) tt)
      WHERE
               rn >= 1 and rn <= 5;
               
               
               select * from essayboard;
               
               
create table mentors_member(
member_seq number, --팔로워 시퀀스
member_name varchar2(50) not null, --회원 이름
member_nickname varchar2(50) not null, --회원 닉네임
member_email varchar2(100)  primary key, --회원 이메일
member_pwd varchar2(100) not null, --회원 패스워드
member_profile varchar2(200), --회원 프로필 사진
member_flag number default 0, --멘토 멘티 구분
    logtime date default sysdate -- 회원가입 일자
);
select * from mentors_member;

                
                 SELECT
                      e.*,
                      j.job_type,
                      mm.member_name,
                      mt.mentor_company,
                      mt.mentor_department,
                      mt.mentor_represent,
                      mtr.mentoring_code,
                      mtr.mentoring_type
                  FROM
                      essayboard       e,
                      job              j,
                      mentor           mt,
                      mentoring        mtr,
                      mentors_member   mm,
                      essayboardScrap  ebs
                  WHERE
                      e.job_code = j.job_code
                      AND e.mentor_email = mt.mentor_email
                      AND mt.mentor_email = mm.member_email
                      AND mt.mentoring_code = mtr.mentoring_code
                      AND ebs.essayboardscrap_es_seq = e.essayboard_seq
                      AND e.mentor_email = 'didwodn82@naver.com'
                ORDER BY ebs.essatboardscrap_logtime desc;
                
                
                select essayboardScrap_es_seq from essayboardScrap;
                
