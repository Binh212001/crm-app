import { MigrationInterface, QueryRunner } from "typeorm";

export class SaasVmaster1745901305390 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        --
-- PostgreSQL database dump
--

-- Dumped from database version 16.9 (Debian 16.9-1.pgdg120+1)
-- Dumped by pg_dump version 16.8

-- Started on 2025-05-12 11:52:15

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 31147)
-- Name: public; Type: SCHEMA; Schema: -; Owner: admin
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO vicoach;

--
-- TOC entry 4930 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: admin
--

COMMENT ON SCHEMA public IS '';


--
-- TOC entry 955 (class 1247 OID 31149)
-- Name: answers_type_disc_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.answers_type_disc_enum AS ENUM (
    'D',
    'I',
    'S',
    'C'
);


ALTER TYPE public.answers_type_disc_enum OWNER TO vicoach;

--
-- TOC entry 958 (class 1247 OID 31158)
-- Name: certificates_status_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.certificates_status_enum AS ENUM (
    'Working',
    'Stop'
);


ALTER TYPE public.certificates_status_enum OWNER TO vicoach;

--
-- TOC entry 961 (class 1247 OID 31164)
-- Name: certificates_suffix_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.certificates_suffix_type_enum AS ENUM (
    'Total By All',
    'Total By Prefix',
    'Total By Course'
);


ALTER TYPE public.certificates_suffix_type_enum OWNER TO vicoach;

--
-- TOC entry 964 (class 1247 OID 31172)
-- Name: conditions_operator_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.conditions_operator_enum AS ENUM (
    'Equal',
    'NotEqual',
    'GreaterThan',
    'LessThan',
    'Answerd',
    'NotAnswer'
);


ALTER TYPE public.conditions_operator_enum OWNER TO vicoach;

--
-- TOC entry 967 (class 1247 OID 31186)
-- Name: course_codes_state_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.course_codes_state_enum AS ENUM (
    'WORKING',
    'USED',
    'EXPIRED',
    'LOCK'
);


ALTER TYPE public.course_codes_state_enum OWNER TO vicoach;

--
-- TOC entry 970 (class 1247 OID 31196)
-- Name: course_codes_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.course_codes_type_enum AS ENUM (
    'DISPOSABLE',
    'REUSABLE'
);


ALTER TYPE public.course_codes_type_enum OWNER TO vicoach;

--
-- TOC entry 973 (class 1247 OID 31202)
-- Name: course_codes_type_import_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.course_codes_type_import_enum AS ENUM (
    'CODE',
    'IMPORT'
);


ALTER TYPE public.course_codes_type_import_enum OWNER TO vicoach;

--
-- TOC entry 976 (class 1247 OID 31208)
-- Name: course_orders_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.course_orders_type_enum AS ENUM (
    'SALE',
    'ORIGINAL',
    'ENTER'
);


ALTER TYPE public.course_orders_type_enum OWNER TO vicoach;

--
-- TOC entry 979 (class 1247 OID 31216)
-- Name: courses_state_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.courses_state_enum AS ENUM (
    'SALE',
    'FREE',
    'COMINGSOON',
    'STOP',
    'NOTSALE'
);


ALTER TYPE public.courses_state_enum OWNER TO vicoach;

--
-- TOC entry 982 (class 1247 OID 31228)
-- Name: courses_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.courses_type_enum AS ENUM (
    'SINGLE',
    'GROUP',
    'ROADMAP',
    'MEMBERSHIP'
);


ALTER TYPE public.courses_type_enum OWNER TO vicoach;

--
-- TOC entry 985 (class 1247 OID 31238)
-- Name: lesson_progress_status_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.lesson_progress_status_enum AS ENUM (
    'ASSIGNED',
    'SUBMITTED',
    'GRADED'
);


ALTER TYPE public.lesson_progress_status_enum OWNER TO vicoach;

--
-- TOC entry 988 (class 1247 OID 31246)
-- Name: lessons_lesson_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.lessons_lesson_type_enum AS ENUM (
    'VIDEO',
    'QUIZ',
    'TEXT',
    'PDF',
    'DOWNLOAD',
    'ASSIGN'
);


ALTER TYPE public.lessons_lesson_type_enum OWNER TO vicoach;

--
-- TOC entry 991 (class 1247 OID 31260)
-- Name: lessons_type_of_video_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.lessons_type_of_video_enum AS ENUM (
    'PATH',
    'URL'
);


ALTER TYPE public.lessons_type_of_video_enum OWNER TO vicoach;

--
-- TOC entry 994 (class 1247 OID 31266)
-- Name: notification_customs_status_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.notification_customs_status_enum AS ENUM (
    'STOP',
    'RUNNING',
    'DRAFT',
    'DONE'
);


ALTER TYPE public.notification_customs_status_enum OWNER TO vicoach;

--
-- TOC entry 997 (class 1247 OID 31276)
-- Name: notification_customs_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.notification_customs_type_enum AS ENUM (
    'GENERAL',
    'ONLINE CLASS TIME ANNOUNCEMENT',
    'LESSON STATUS UPDATE NOTIFICATION',
    'PROMOTION AND DISCOUNT ANNOUNCEMENT'
);


ALTER TYPE public.notification_customs_type_enum OWNER TO vicoach;

--
-- TOC entry 1000 (class 1247 OID 31286)
-- Name: orders_item_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.orders_item_type_enum AS ENUM (
    'COURSE'
);


ALTER TYPE public.orders_item_type_enum OWNER TO vicoach;

--
-- TOC entry 1003 (class 1247 OID 31290)
-- Name: orders_order_source_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.orders_order_source_enum AS ENUM (
    'API',
    'MANUAL',
    'CRONJOB',
    'ADMIN',
    'USER',
    'SYSTEM'
);


ALTER TYPE public.orders_order_source_enum OWNER TO vicoach;

--
-- TOC entry 1006 (class 1247 OID 31304)
-- Name: orders_order_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.orders_order_type_enum AS ENUM (
    'COURSE',
    'AGENCY'
);


ALTER TYPE public.orders_order_type_enum OWNER TO vicoach;

--
-- TOC entry 1009 (class 1247 OID 31310)
-- Name: orders_package_order_state_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.orders_package_order_state_enum AS ENUM (
    'NEW',
    'RENEW'
);


ALTER TYPE public.orders_package_order_state_enum OWNER TO vicoach;

--
-- TOC entry 1012 (class 1247 OID 31316)
-- Name: orders_price_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.orders_price_type_enum AS ENUM (
    'SALE',
    'ORIGINAL',
    'ENTER'
);


ALTER TYPE public.orders_price_type_enum OWNER TO vicoach;

--
-- TOC entry 1015 (class 1247 OID 31324)
-- Name: page_managers_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.page_managers_type_enum AS ENUM (
    'HEADER',
    'CONTENT',
    'FOOTER'
);


ALTER TYPE public.page_managers_type_enum OWNER TO vicoach;

--
-- TOC entry 1018 (class 1247 OID 31332)
-- Name: popup_account_display_popup_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.popup_account_display_popup_enum AS ENUM (
    'all',
    'user_not_account',
    'user_has_account',
    'user_is_student'
);


ALTER TYPE public.popup_account_display_popup_enum OWNER TO vicoach;

--
-- TOC entry 1021 (class 1247 OID 31342)
-- Name: popup_display_size_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.popup_display_size_enum AS ENUM (
    'small',
    'medium',
    'large'
);


ALTER TYPE public.popup_display_size_enum OWNER TO vicoach;

--
-- TOC entry 1024 (class 1247 OID 31350)
-- Name: promo_codes_promotion_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.promo_codes_promotion_type_enum AS ENUM (
    'order',
    'course'
);


ALTER TYPE public.promo_codes_promotion_type_enum OWNER TO vicoach;

--
-- TOC entry 1027 (class 1247 OID 31356)
-- Name: promo_codes_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.promo_codes_type_enum AS ENUM (
    'REUSABLE',
    'SINGLE_USE'
);


ALTER TYPE public.promo_codes_type_enum OWNER TO vicoach;

--
-- TOC entry 1030 (class 1247 OID 31362)
-- Name: promo_conditions_account_created_at_operator_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.promo_conditions_account_created_at_operator_enum AS ENUM (
    '<',
    '>'
);


ALTER TYPE public.promo_conditions_account_created_at_operator_enum OWNER TO vicoach;

--
-- TOC entry 1033 (class 1247 OID 31368)
-- Name: promo_conditions_count_course_operator_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.promo_conditions_count_course_operator_enum AS ENUM (
    '<',
    '>'
);


ALTER TYPE public.promo_conditions_count_course_operator_enum OWNER TO vicoach;

--
-- TOC entry 1036 (class 1247 OID 31374)
-- Name: questions_difficulty_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.questions_difficulty_enum AS ENUM (
    'Rất dễ',
    'Dễ',
    'Trung bình',
    'Khó',
    'Rất khó'
);


ALTER TYPE public.questions_difficulty_enum OWNER TO vicoach;

--
-- TOC entry 1039 (class 1247 OID 31386)
-- Name: questions_scope_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.questions_scope_enum AS ENUM (
    'Global',
    'Survey'
);


ALTER TYPE public.questions_scope_enum OWNER TO vicoach;

--
-- TOC entry 1042 (class 1247 OID 31392)
-- Name: questions_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.questions_type_enum AS ENUM (
    'ONE_RESULT',
    'MULTI_RESULT',
    'TRUE_FALSE',
    'FILL_TEXT',
    'DISC'
);


ALTER TYPE public.questions_type_enum OWNER TO vicoach;

--
-- TOC entry 1045 (class 1247 OID 31404)
-- Name: quiz_answer_type_disc_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.quiz_answer_type_disc_enum AS ENUM (
    'D',
    'I',
    'S',
    'C'
);


ALTER TYPE public.quiz_answer_type_disc_enum OWNER TO vicoach;

--
-- TOC entry 1048 (class 1247 OID 31414)
-- Name: quiz_question_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.quiz_question_type_enum AS ENUM (
    'ONE_RESULT',
    'MULTI_RESULT',
    'TRUE_FALSE',
    'FILL_TEXT',
    'DISC'
);


ALTER TYPE public.quiz_question_type_enum OWNER TO vicoach;

--
-- TOC entry 1051 (class 1247 OID 31426)
-- Name: quiz_status_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.quiz_status_enum AS ENUM (
    'pending',
    'inprogress',
    'completed',
    'expired'
);


ALTER TYPE public.quiz_status_enum OWNER TO vicoach;

--
-- TOC entry 1054 (class 1247 OID 31436)
-- Name: reviews_state_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.reviews_state_enum AS ENUM (
    'PENDING',
    'PUBLIC',
    'STORAGE'
);


ALTER TYPE public.reviews_state_enum OWNER TO vicoach;

--
-- TOC entry 1057 (class 1247 OID 31444)
-- Name: tags_tag_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.tags_tag_type_enum AS ENUM (
    'TOPIC',
    'BLOG'
);


ALTER TYPE public.tags_tag_type_enum OWNER TO vicoach;

--
-- TOC entry 1060 (class 1247 OID 31450)
-- Name: take_quiz_status_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.take_quiz_status_enum AS ENUM (
    'pending',
    'inprogress',
    'completed',
    'expired'
);


ALTER TYPE public.take_quiz_status_enum OWNER TO vicoach;

--
-- TOC entry 1063 (class 1247 OID 31460)
-- Name: take_quiz_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.take_quiz_type_enum AS ENUM (
    'LESSON',
    'ENROLL'
);


ALTER TYPE public.take_quiz_type_enum OWNER TO vicoach;

--
-- TOC entry 1066 (class 1247 OID 31466)
-- Name: topic_set_condition_difficulty_level_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.topic_set_condition_difficulty_level_enum AS ENUM (
    'Rất dễ',
    'Dễ',
    'Trung bình',
    'Khó',
    'Rất khó'
);


ALTER TYPE public.topic_set_condition_difficulty_level_enum OWNER TO vicoach;

--
-- TOC entry 1069 (class 1247 OID 31478)
-- Name: topic_set_condition_question_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.topic_set_condition_question_type_enum AS ENUM (
    'ONE_RESULT',
    'MULTI_RESULT',
    'TRUE_FALSE',
    'FILL_TEXT',
    'DISC'
);


ALTER TYPE public.topic_set_condition_question_type_enum OWNER TO vicoach;

--
-- TOC entry 1072 (class 1247 OID 31490)
-- Name: topic_sets_type_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.topic_sets_type_enum AS ENUM (
    'LIST',
    'AUTO'
);


ALTER TYPE public.topic_sets_type_enum OWNER TO vicoach;

--
-- TOC entry 1075 (class 1247 OID 31496)
-- Name: transaction_payment_method_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.transaction_payment_method_enum AS ENUM (
    'BANK_TRANSFER',
    'VNPAY'
);


ALTER TYPE public.transaction_payment_method_enum OWNER TO vicoach;

--
-- TOC entry 1078 (class 1247 OID 31502)
-- Name: transaction_status_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.transaction_status_enum AS ENUM (
    'PENDING',
    'COMPLETED',
    'FAILED',
    'REFUNDED'
);


ALTER TYPE public.transaction_status_enum OWNER TO vicoach;

--
-- TOC entry 1081 (class 1247 OID 31512)
-- Name: users_status_enum; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public.users_status_enum AS ENUM (
    'active',
    'blocked',
    'inactive'
);


ALTER TYPE public.users_status_enum OWNER TO vicoach;

SET default_tablespace = '';
SET default_table_access_method = heap;




--
-- TOC entry 216 (class 1259 OID 31527)
-- Name: course_enrolleds; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.course_enrolleds (
    id uuid NOT NULL,
    deleted_at timestamp without time zone,
    user_id uuid,
    course_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    is_finished boolean DEFAULT false NOT NULL,
    percentage double precision DEFAULT '0'::double precision NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    to_date_duration timestamp without time zone,
    number_of_learn integer DEFAULT 0 NOT NULL,
    completion_time integer DEFAULT 0,
    completion_date timestamp without time zone,
    latest_lesson_date timestamp without time zone,
    code character varying,
    interactive_time integer DEFAULT 0 NOT NULL,
    date_remaining integer,
    learning_times integer DEFAULT 1 NOT NULL
);


ALTER TABLE public.course_enrolleds OWNER TO vicoach;

--
-- TOC entry 217 (class 1259 OID 31541)
-- Name: courses; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.courses (
    id uuid NOT NULL,
    type public.courses_type_enum DEFAULT 'SINGLE'::public.courses_type_enum NOT NULL,
    name character varying NOT NULL,
    short_description character varying DEFAULT ''::character varying NOT NULL,
    short_description_text character varying DEFAULT 'Mô tả ngắn'::character varying NOT NULL,
    title1 character varying DEFAULT ''::character varying NOT NULL,
    title1_text character varying DEFAULT 'Giảng viên'::character varying NOT NULL,
    short_content character varying DEFAULT ''::character varying NOT NULL,
    short_content_text character varying DEFAULT 'Nội dung khóa học'::character varying NOT NULL,
    request_description character varying DEFAULT ''::character varying NOT NULL,
    request_description_text character varying DEFAULT 'Yêu cầu'::character varying NOT NULL,
    learning_materials_text character varying DEFAULT 'Khóa học bao gồm'::character varying NOT NULL,
    objectives_text character varying DEFAULT 'Mục tiêu của khóa học'::character varying NOT NULL,
    description character varying DEFAULT ''::character varying NOT NULL,
    description_text character varying DEFAULT 'Mô tả khóa học'::character varying NOT NULL,
    course_objects_text character varying DEFAULT ' Đối tượng của khóa học'::character varying NOT NULL,
    course_related_text character varying DEFAULT 'Khóa học liên quan'::character varying NOT NULL,
    is_complete_exercises_order boolean DEFAULT false NOT NULL,
    is_hide_lecture_duration boolean DEFAULT false NOT NULL,
    is_off_video_watermark boolean DEFAULT false NOT NULL,
    is_allow_course_evaluation boolean DEFAULT false NOT NULL,
    is_preset_evaluation_parameters boolean DEFAULT false NOT NULL,
    number_of_purchases integer DEFAULT 0 NOT NULL,
    number_of_admissions integer DEFAULT 0 NOT NULL,
    buy_course_btn_text character varying DEFAULT ''::character varying NOT NULL,
    get_course_btn_text character varying DEFAULT ''::character varying NOT NULL,
    enter_course_btn_text character varying DEFAULT ''::character varying NOT NULL,
    extend_btn_text character varying DEFAULT ''::character varying NOT NULL,
    pay_btn_text character varying DEFAULT ''::character varying NOT NULL,
    state public.courses_state_enum DEFAULT 'STOP'::public.courses_state_enum NOT NULL,
    label character varying DEFAULT ''::character varying NOT NULL,
    duration_text character varying DEFAULT ''::character varying NOT NULL,
    deleted_at timestamp without time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    is_publish boolean DEFAULT false NOT NULL,
    topic_id uuid,
    document jsonb DEFAULT '[{"url": ""}]'::jsonb NOT NULL,
    materials jsonb,
    objectives jsonb,
    objects jsonb,
    url_trailer jsonb DEFAULT '{"url": ""}'::jsonb NOT NULL,
    url_widget_img jsonb DEFAULT '{"url": ""}'::jsonb NOT NULL,
    url_detail_img jsonb DEFAULT '{"url": ""}'::jsonb NOT NULL,
    promo_code_condion_id uuid,
    promo_code_id uuid,
    slug character varying(200),
    is_affiliate boolean DEFAULT false NOT NULL,
    is_affiliate_discount_percent boolean DEFAULT false NOT NULL,
    affiliate_discount_percent integer,
    affiliate_promotion_price integer,
    affiliate_levels jsonb,
    is_featured boolean DEFAULT false NOT NULL,
    is_internal boolean DEFAULT false NOT NULL
);


ALTER TABLE public.courses OWNER TO vicoach;

--
-- TOC entry 218 (class 1259 OID 31587)
-- Name: lesson_progress; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.lesson_progress (
    id uuid NOT NULL,
    status public.lesson_progress_status_enum DEFAULT 'GRADED'::public.lesson_progress_status_enum NOT NULL,
    is_finished boolean DEFAULT false NOT NULL,
    deleted_at timestamp without time zone,
    user_id uuid,
    lesson_id uuid,
    chapter_id uuid,
    course_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    course_enrolled_id uuid,
    completion_time integer DEFAULT 0,
    score double precision,
    number_of_learn integer DEFAULT 0 NOT NULL,
    interactive_time integer DEFAULT 0 NOT NULL,
    deadline timestamp with time zone,
    resume integer,
    date_complete_of_user timestamp with time zone,
    start_date timestamp with time zone,
    last_access timestamp with time zone,
    date_complete timestamp with time zone
);


ALTER TABLE public.lesson_progress OWNER TO vicoach;

--
-- TOC entry 219 (class 1259 OID 31599)
-- Name: lessons; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.lessons (
    id uuid NOT NULL,
    title character varying DEFAULT 'Tên bài mới'::character varying NOT NULL,
    url_lesson text DEFAULT ''::text NOT NULL,
    duration integer DEFAULT 0 NOT NULL,
    lesson_type public.lessons_lesson_type_enum NOT NULL,
    content_text text DEFAULT ''::text NOT NULL,
    is_allow_discussion boolean DEFAULT true NOT NULL,
    sequence integer NOT NULL,
    is_draft boolean DEFAULT false NOT NULL,
    deleted_at timestamp without time zone,
    duration_quiz integer,
    time_start_quiz timestamp without time zone,
    text_lesson text DEFAULT ''::text,
    is_allow_preview boolean DEFAULT true,
    is_lock_right_click_copy boolean DEFAULT false,
    type_of_video public.lessons_type_of_video_enum DEFAULT 'PATH'::public.lessons_type_of_video_enum,
    is_video_lock boolean DEFAULT false,
    chapter_id uuid,
    quiz_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    course_id uuid,
    url_pdf jsonb DEFAULT '{"url": ""}'::jsonb,
    url_video jsonb DEFAULT '{"url": ""}'::jsonb,
    exams_id uuid,
    documents jsonb DEFAULT '[]'::jsonb NOT NULL,
    is_grade_manual boolean DEFAULT false,
    attempt_count integer DEFAULT 1,
    submit_status character varying(100),
    deadline integer,
    time_to_learn timestamp with time zone,
    days_to_complete integer
);


ALTER TABLE public.lessons OWNER TO vicoach;

--
-- TOC entry 220 (class 1259 OID 31622)
-- Name: users; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.users (
    id uuid NOT NULL,
    username character varying(50),
    first_name character varying(100) DEFAULT ''::character varying NOT NULL,
    last_name character varying(100) DEFAULT ''::character varying NOT NULL,
    email character varying NOT NULL,
    phone_number character varying DEFAULT ''::character varying NOT NULL,
    password character varying NOT NULL,
    bio character varying DEFAULT ''::character varying NOT NULL,
    is_super_user boolean DEFAULT false NOT NULL,
    deleted_at timestamp with time zone,
    status public.users_status_enum DEFAULT 'inactive'::public.users_status_enum NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    image jsonb DEFAULT '{"url": ""}'::jsonb NOT NULL,
    number_of_course integer DEFAULT 0 NOT NULL,
    refer_code character varying DEFAULT ''::character varying NOT NULL,
    online_duration integer DEFAULT 0 NOT NULL,
    address character varying DEFAULT ''::character varying NOT NULL,
    date_of_birth timestamp without time zone,
    provider character varying DEFAULT ''::character varying NOT NULL,
    social_id character varying DEFAULT ''::character varying NOT NULL,
    is_internal boolean DEFAULT false NOT NULL
);


ALTER TABLE public.users OWNER TO vicoach;

--
-- TOC entry 221 (class 1259 OID 31643)
-- Name: advanced_academic_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.advanced_academic_report AS
 SELECT count(DISTINCT users.id) AS user_count,
    0 AS online_duration,
    0 AS course_active,
    0 AS completion_time,
    0 AS completion_count,
    0 AS duration,
    0 AS learn_time,
    date(users.created_at) AS created_at
   FROM public.users
  WHERE (users.deleted_at IS NULL)
  GROUP BY (date(users.created_at))
UNION ALL
 SELECT 0 AS user_count,
    0 AS online_duration,
    count(DISTINCT ce.id) AS course_active,
    0 AS completion_time,
    0 AS completion_count,
    0 AS duration,
    0 AS learn_time,
    date(ce.created_at) AS created_at
   FROM public.course_enrolleds ce
  WHERE (ce.deleted_at IS NULL)
  GROUP BY (date(ce.created_at))
UNION ALL
 SELECT 0 AS user_count,
    0 AS online_duration,
    0 AS course_active,
    sum(ce.completion_time) AS completion_time,
    0 AS completion_count,
    0 AS duration,
    0 AS learn_time,
    date(ce.created_at) AS created_at
   FROM public.course_enrolleds ce
  WHERE ((ce.is_finished = true) AND (ce.deleted_at IS NULL))
  GROUP BY (date(ce.created_at))
UNION ALL
 SELECT 0 AS user_count,
    0 AS online_duration,
    0 AS course_active,
    0 AS completion_time,
    count(DISTINCT ce.id) AS completion_count,
    0 AS duration,
    0 AS learn_time,
    date(ce.created_at) AS created_at
   FROM public.course_enrolleds ce
  WHERE ((ce.is_finished = true) AND (ce.deleted_at IS NULL))
  GROUP BY (date(ce.created_at))
UNION ALL
 SELECT 0 AS user_count,
    0 AS online_duration,
    0 AS course_active,
    0 AS completion_time,
    0 AS completion_count,
    sum(l.duration) AS duration,
    0 AS learn_time,
    date(c.created_at) AS created_at
   FROM (public.lessons l
     LEFT JOIN public.courses c ON ((c.id = l.course_id)))
  WHERE ((c.deleted_at IS NULL) AND (l.deleted_at IS NULL))
  GROUP BY (date(c.created_at))
UNION ALL
 SELECT 0 AS user_count,
    0 AS online_duration,
    0 AS course_active,
    0 AS completion_time,
    0 AS completion_count,
    0 AS duration,
    sum(lp.interactive_time) AS learn_time,
    date(c.created_at) AS created_at
   FROM (public.lesson_progress lp
     LEFT JOIN public.courses c ON ((c.id = lp.course_id)))
  WHERE (c.deleted_at IS NULL)
  GROUP BY (date(c.created_at))
UNION ALL
 SELECT 0 AS user_count,
    sum(users.online_duration) AS online_duration,
    0 AS course_active,
    0 AS completion_time,
    0 AS completion_count,
    0 AS duration,
    0 AS learn_time,
    date(users.created_at) AS created_at
   FROM public.users
  WHERE (users.deleted_at IS NULL)
  GROUP BY (date(users.created_at));


ALTER VIEW public.advanced_academic_report OWNER TO vicoach;

--
-- TOC entry 222 (class 1259 OID 31648)
-- Name: lecturers; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.lecturers (
    id uuid NOT NULL,
    name character varying DEFAULT ''::character varying NOT NULL,
    url character varying DEFAULT ''::character varying NOT NULL,
    email character varying DEFAULT ''::character varying NOT NULL,
    title character varying DEFAULT ''::character varying NOT NULL,
    summary_info character varying DEFAULT ''::character varying NOT NULL,
    full_info character varying DEFAULT ''::character varying NOT NULL,
    deleted_at timestamp without time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    image jsonb DEFAULT '[{"url": ""}]'::jsonb NOT NULL
);


ALTER TABLE public.lecturers OWNER TO vicoach;

--
-- TOC entry 223 (class 1259 OID 31662)
-- Name: advanced_overview_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.advanced_overview_report AS
 SELECT count(users.id) AS user_count,
    0 AS course_count,
    0 AS lecturer_count,
    date(users.created_at) AS created_at
   FROM public.users
  WHERE (users.deleted_at IS NULL)
  GROUP BY (date(users.created_at))
UNION ALL
 SELECT 0 AS user_count,
    count(courses.id) AS course_count,
    0 AS lecturer_count,
    date(courses.created_at) AS created_at
   FROM public.courses
  WHERE ((courses.is_publish = true) AND (courses.deleted_at IS NULL))
  GROUP BY (date(courses.created_at))
UNION ALL
 SELECT 0 AS user_count,
    0 AS course_count,
    count(lecturers.id) AS lecturer_count,
    date(lecturers.created_at) AS created_at
   FROM public.lecturers
  WHERE (lecturers.deleted_at IS NULL)
  GROUP BY (date(lecturers.created_at));


ALTER VIEW public.advanced_overview_report OWNER TO vicoach;

--
-- TOC entry 224 (class 1259 OID 31667)
-- Name: affiliate_histories; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.affiliate_histories (
    id uuid NOT NULL,
    content character varying NOT NULL,
    execution_date timestamp without time zone NOT NULL,
    amount integer NOT NULL,
    previous_balance integer NOT NULL,
    balance integer NOT NULL,
    status character varying DEFAULT ''::character varying NOT NULL,
    note character varying DEFAULT ''::character varying NOT NULL,
    affiliate_user_id uuid,
    transaction_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    revenue integer
);


ALTER TABLE public.affiliate_histories OWNER TO vicoach;

--
-- TOC entry 225 (class 1259 OID 31676)
-- Name: affiliate_transactions; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.affiliate_transactions (
    id uuid NOT NULL,
    content character varying NOT NULL,
    with_drawal_amount integer NOT NULL,
    status character varying DEFAULT ''::character varying NOT NULL,
    customer_info jsonb DEFAULT '{"bank": "", "note": "", "branch": "", "nameAccount": "", "accountNumber": ""}'::jsonb NOT NULL,
    note character varying DEFAULT ''::character varying NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    previous_balance integer NOT NULL,
    balance integer NOT NULL,
    affiliate_user_id uuid
);


ALTER TABLE public.affiliate_transactions OWNER TO vicoach;

--
-- TOC entry 226 (class 1259 OID 31686)
-- Name: affiliates; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.affiliates (
    user_id uuid NOT NULL,
    commission integer DEFAULT 0 NOT NULL,
    code character varying NOT NULL,
    agency_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    total_order integer DEFAULT 0 NOT NULL,
    total_order_success integer DEFAULT 0 NOT NULL,
    mpath character varying DEFAULT ''::character varying,
    parent_user_id uuid,
    revenue integer DEFAULT 0 NOT NULL,
    level integer DEFAULT 1 NOT NULL
);


ALTER TABLE public.affiliates OWNER TO vicoach;

--
-- TOC entry 227 (class 1259 OID 31699)
-- Name: agencies; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.agencies (
    id uuid NOT NULL,
    name character varying(100) NOT NULL,
    number_of_course integer DEFAULT 0 NOT NULL,
    max_users integer DEFAULT 0 NOT NULL,
    user_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    commission integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.agencies OWNER TO vicoach;

--
-- TOC entry 228 (class 1259 OID 31709)
-- Name: agencies_courses_courses; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.agencies_courses_courses (
    agencies_id uuid NOT NULL,
    courses_id uuid NOT NULL
);


ALTER TABLE public.agencies_courses_courses OWNER TO vicoach;

--
-- TOC entry 229 (class 1259 OID 31712)
-- Name: agency_package_orders; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.agency_package_orders (
    id uuid NOT NULL,
    package_id uuid NOT NULL,
    user_id uuid NOT NULL,
    package_version_id uuid NOT NULL,
    price integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.agency_package_orders OWNER TO vicoach;

--
-- TOC entry 230 (class 1259 OID 31719)
-- Name: agency_package_versions; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.agency_package_versions (
    fk_agency_package_version_id uuid NOT NULL,
    package_id uuid NOT NULL,
    max_user integer DEFAULT 0 NOT NULL,
    price integer DEFAULT 0 NOT NULL,
    promotional_price integer DEFAULT 0 NOT NULL,
    is_active boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.agency_package_versions OWNER TO vicoach;

--
-- TOC entry 231 (class 1259 OID 31730)
-- Name: agency_package_versions_courses_courses; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.agency_package_versions_courses_courses (
    agency_package_versions_fk_agency_package_version_id uuid NOT NULL,
    courses_id uuid NOT NULL
);


ALTER TABLE public.agency_package_versions_courses_courses OWNER TO vicoach;

--
-- TOC entry 232 (class 1259 OID 31733)
-- Name: agency_packages; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.agency_packages (
    id uuid NOT NULL,
    name character varying NOT NULL,
    price integer DEFAULT 0 NOT NULL,
    promotional_price integer DEFAULT 0 NOT NULL,
    is_active boolean DEFAULT false NOT NULL,
    max_user integer DEFAULT 0,
    package_type character varying NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.agency_packages OWNER TO vicoach;

--
-- TOC entry 233 (class 1259 OID 31744)
-- Name: agency_packages_courses_courses; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.agency_packages_courses_courses (
    agency_packages_id uuid NOT NULL,
    courses_id uuid NOT NULL
);


ALTER TABLE public.agency_packages_courses_courses OWNER TO vicoach;

--
-- TOC entry 234 (class 1259 OID 31747)
-- Name: agency_users; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.agency_users (
    user_id uuid NOT NULL,
    agency_id uuid NOT NULL
);


ALTER TABLE public.agency_users OWNER TO vicoach;

--
-- TOC entry 235 (class 1259 OID 31750)
-- Name: agency_with_package; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.agency_with_package (
    agency_id uuid NOT NULL,
    package_id uuid NOT NULL,
    package_version_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    id uuid NOT NULL
);


ALTER TABLE public.agency_with_package OWNER TO vicoach;

--
-- TOC entry 236 (class 1259 OID 31757)
-- Name: answers; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.answers (
    id uuid NOT NULL,
    is_correct boolean DEFAULT false,
    text_answer character varying,
    type_disc public.answers_type_disc_enum,
    question_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.answers OWNER TO vicoach;

--
-- TOC entry 237 (class 1259 OID 31765)
-- Name: assignments; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.assignments (
    id uuid NOT NULL,
    submit_state character varying(100),
    submit_at timestamp with time zone DEFAULT '2025-04-21 08:34:43.28+00'::timestamp with time zone,
    temp_file json DEFAULT '[]'::json NOT NULL,
    evaluate text DEFAULT ''::text NOT NULL,
    score integer,
    deleted_at timestamp without time zone,
    lesson_progress_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.assignments OWNER TO vicoach;

--
-- TOC entry 238 (class 1259 OID 31778)
-- Name: blogs; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.blogs (
    id uuid NOT NULL,
    slug character varying(200),
    title text DEFAULT ''::text NOT NULL,
    summary text DEFAULT ''::text NOT NULL,
    published boolean DEFAULT false NOT NULL,
    content text DEFAULT ''::text,
    published_at timestamp without time zone,
    detail_img jsonb DEFAULT '{"url": ""}'::jsonb NOT NULL,
    deleted_at timestamp without time zone,
    user_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.blogs OWNER TO vicoach;

--
-- TOC entry 239 (class 1259 OID 31790)
-- Name: blogs_categories; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.blogs_categories (
    blog_id uuid NOT NULL,
    category_id uuid NOT NULL
);


ALTER TABLE public.blogs_categories OWNER TO vicoach;

--
-- TOC entry 240 (class 1259 OID 31793)
-- Name: blogs_tags; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.blogs_tags (
    tag_id uuid NOT NULL,
    blog_id uuid NOT NULL
);


ALTER TABLE public.blogs_tags OWNER TO vicoach;

--
-- TOC entry 241 (class 1259 OID 31796)
-- Name: categories; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.categories (
    id uuid NOT NULL,
    name text,
    slug character varying(200),
    description text,
    published boolean DEFAULT false NOT NULL,
    published_at timestamp without time zone,
    deleted_at timestamp without time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.categories OWNER TO vicoach;

--
-- TOC entry 242 (class 1259 OID 31804)
-- Name: certificates; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.certificates (
    id uuid NOT NULL,
    name character varying NOT NULL,
    background_image character varying,
    prefix_code character varying,
    suffix_type public.certificates_suffix_type_enum,
    suffix_code_begin integer,
    suffix_code_current integer,
    fabric jsonb,
    status public.certificates_status_enum DEFAULT 'Stop'::public.certificates_status_enum NOT NULL,
    deleted_at timestamp without time zone,
    course_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    course_name character varying DEFAULT ''::character varying
);


ALTER TABLE public.certificates OWNER TO vicoach;

--
-- TOC entry 243 (class 1259 OID 31813)
-- Name: certificates_issued; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.certificates_issued (
    id uuid NOT NULL,
    user_name character varying DEFAULT ''::character varying,
    email character varying DEFAULT ''::character varying,
    code character varying,
    fabric jsonb,
    deleted_at timestamp without time zone,
    certificate_id uuid,
    user_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    course_name character varying DEFAULT ''::character varying,
    pdf_url jsonb DEFAULT '{"url": ""}'::jsonb NOT NULL
);


ALTER TABLE public.certificates_issued OWNER TO vicoach;

--
-- TOC entry 244 (class 1259 OID 31824)
-- Name: chapters; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.chapters (
    id uuid NOT NULL,
    name character varying NOT NULL,
    sequence integer NOT NULL,
    deleted_at timestamp without time zone,
    course_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    duration integer DEFAULT 0 NOT NULL,
    count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.chapters OWNER TO vicoach;

--
-- TOC entry 245 (class 1259 OID 31833)
-- Name: chapters_sequence_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.chapters_sequence_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.chapters_sequence_seq OWNER TO vicoach;

--
-- TOC entry 4932 (class 0 OID 0)
-- Dependencies: 245
-- Name: chapters_sequence_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.chapters_sequence_seq OWNED BY public.chapters.sequence;


--
-- TOC entry 246 (class 1259 OID 31834)
-- Name: conditions; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.conditions (
    id uuid NOT NULL,
    operator public.conditions_operator_enum NOT NULL,
    question_id uuid NOT NULL,
    answer_id uuid NOT NULL,
    question_condition_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.conditions OWNER TO vicoach;

--
-- TOC entry 247 (class 1259 OID 31841)
-- Name: course-combos; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."course-combos" (
    id uuid NOT NULL,
    name character varying DEFAULT ''::character varying NOT NULL,
    sequence integer NOT NULL,
    deleted_at timestamp without time zone,
    course_id uuid,
    course_combo_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public."course-combos" OWNER TO vicoach;

--
-- TOC entry 248 (class 1259 OID 31849)
-- Name: course-combos_sequence_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."course-combos_sequence_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."course-combos_sequence_seq" OWNER TO vicoach;

--
-- TOC entry 4933 (class 0 OID 0)
-- Dependencies: 248
-- Name: course-combos_sequence_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."course-combos_sequence_seq" OWNED BY public."course-combos".sequence;


--
-- TOC entry 249 (class 1259 OID 31850)
-- Name: course_codes; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.course_codes (
    id uuid NOT NULL,
    code character varying NOT NULL,
    type public.course_codes_type_enum DEFAULT 'DISPOSABLE'::public.course_codes_type_enum NOT NULL,
    number_of_uses integer DEFAULT '-1'::integer NOT NULL,
    type_import public.course_codes_type_import_enum DEFAULT 'CODE'::public.course_codes_type_import_enum NOT NULL,
    duration integer,
    from_date timestamp without time zone,
    to_date timestamp without time zone,
    state public.course_codes_state_enum DEFAULT 'WORKING'::public.course_codes_state_enum NOT NULL,
    number_used integer DEFAULT 0 NOT NULL,
    deleted_at timestamp without time zone,
    course_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    list_used jsonb
);


ALTER TABLE public.course_codes OWNER TO vicoach;

--
-- TOC entry 250 (class 1259 OID 31862)
-- Name: course_lecturer; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.course_lecturer (
    course_id uuid NOT NULL,
    lecturer_id uuid NOT NULL
);


ALTER TABLE public.course_lecturer OWNER TO vicoach;

--
-- TOC entry 251 (class 1259 OID 31865)
-- Name: course_orders; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.course_orders (
    id character varying NOT NULL,
    type public.course_orders_type_enum DEFAULT 'ORIGINAL'::public.course_orders_type_enum NOT NULL,
    course_price numeric(10,2),
    order_id character varying,
    course_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.course_orders OWNER TO vicoach;

--
-- TOC entry 252 (class 1259 OID 31873)
-- Name: orders; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.orders (
    recipient_name character varying(255) NOT NULL,
    recipient_email character varying(255) NOT NULL,
    recipient_phone character varying(20) NOT NULL,
    recipient_address text NOT NULL,
    order_source public.orders_order_source_enum DEFAULT 'ADMIN'::public.orders_order_source_enum NOT NULL,
    discount_code character varying(255),
    credits_used integer,
    apoints_used integer,
    customer_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    code character varying NOT NULL,
    price_type public.orders_price_type_enum DEFAULT 'ORIGINAL'::public.orders_price_type_enum NOT NULL,
    item_type public.orders_item_type_enum DEFAULT 'COURSE'::public.orders_item_type_enum NOT NULL,
    order_type public.orders_order_type_enum DEFAULT 'COURSE'::public.orders_order_type_enum NOT NULL,
    package_id uuid,
    user_id character varying,
    package_version_id uuid,
    price integer,
    package_order_state public.orders_package_order_state_enum,
    transaction_id uuid,
    id uuid NOT NULL,
    affiliate_code character varying,
    image jsonb DEFAULT '[{"url": ""}]'::jsonb NOT NULL
);


ALTER TABLE public.orders OWNER TO vicoach;

--
-- TOC entry 253 (class 1259 OID 31885)
-- Name: orders_items; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.orders_items (
    order_item_type character varying NOT NULL,
    order_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    course_id uuid,
    id uuid NOT NULL,
    price integer NOT NULL
);


ALTER TABLE public.orders_items OWNER TO vicoach;

--
-- TOC entry 254 (class 1259 OID 31892)
-- Name: reviews; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.reviews (
    id uuid NOT NULL,
    rate integer DEFAULT 0 NOT NULL,
    review text DEFAULT ''::text NOT NULL,
    state public.reviews_state_enum DEFAULT 'PENDING'::public.reviews_state_enum NOT NULL,
    detail text DEFAULT ''::text NOT NULL,
    deleted_at timestamp without time zone,
    user_id uuid,
    course_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.reviews OWNER TO vicoach;

--
-- TOC entry 255 (class 1259 OID 31903)
-- Name: transaction; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.transaction (
    id uuid NOT NULL,
    amount integer NOT NULL,
    payment_method public.transaction_payment_method_enum,
    status public.transaction_status_enum DEFAULT 'PENDING'::public.transaction_status_enum NOT NULL,
    transaction_code character varying(255) NOT NULL,
    user_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    payment_date timestamp without time zone
);


ALTER TABLE public.transaction OWNER TO vicoach;

--
-- TOC entry 256 (class 1259 OID 31911)
-- Name: course_overview_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.course_overview_report AS
 SELECT courses.id AS course_id,
    courses.name AS course_name,
    COALESCE(sum(res.orders), (0)::numeric) AS orders,
    COALESCE(sum(res.total_price), (0)::numeric) AS total_price,
    COALESCE(sum(res.user_active), (0)::numeric) AS user_active,
    COALESCE(sum(res.number_of_learns), (0)::numeric) AS number_of_learns,
    COALESCE(sum(res.order_completed), (0)::numeric) AS order_completed,
    COALESCE(sum(res.order_failed), (0)::numeric) AS order_failed,
    COALESCE(sum(res.order_vnpay), (0)::numeric) AS order_vnpay,
    COALESCE(sum(res.order_bank_transfer), (0)::numeric) AS order_bank_transfer,
    COALESCE(sum(res.user_finished_courses), (0)::numeric) AS user_finished_courses,
    COALESCE(sum(res.rate_count), (0)::numeric) AS rate_count,
    res.created_at
   FROM (public.courses
     LEFT JOIN ( SELECT oi.course_id,
            count(DISTINCT o.id) AS orders,
            NULL::bigint AS total_price,
            NULL::bigint AS user_active,
            NULL::bigint AS number_of_learns,
            NULL::bigint AS order_completed,
            NULL::bigint AS order_failed,
            NULL::bigint AS order_vnpay,
            NULL::bigint AS order_bank_transfer,
            NULL::bigint AS user_finished_courses,
            NULL::bigint AS rate_count,
            date(trans.created_at) AS created_at
           FROM ((public.transaction trans
             JOIN public.orders o ON ((o.transaction_id = trans.id)))
             JOIN public.orders_items oi ON ((oi.order_id = o.id)))
          GROUP BY oi.course_id, (date(trans.created_at))
        UNION ALL
         SELECT oi.course_id,
            NULL::bigint AS orders,
            sum(oi.price) AS total_price,
            NULL::bigint AS user_active,
            NULL::bigint AS number_of_learns,
            NULL::bigint AS order_completed,
            NULL::bigint AS order_failed,
            NULL::bigint AS order_vnpay,
            NULL::bigint AS order_bank_transfer,
            NULL::bigint AS user_finished_courses,
            NULL::bigint AS rate_count,
            date(trans.created_at) AS created_at
           FROM ((public.transaction trans
             JOIN public.orders o ON ((o.transaction_id = trans.id)))
             JOIN public.orders_items oi ON ((oi.order_id = o.id)))
          WHERE (trans.status = 'COMPLETED'::public.transaction_status_enum)
          GROUP BY oi.course_id, trans.created_at
        UNION ALL
         SELECT enroll.course_id,
            NULL::bigint AS orders,
            NULL::bigint AS total_price,
            count(DISTINCT enroll.user_id) AS user_active,
            NULL::bigint AS number_of_learns,
            NULL::bigint AS order_completed,
            NULL::bigint AS order_failed,
            NULL::bigint AS order_vnpay,
            NULL::bigint AS order_bank_transfer,
            NULL::bigint AS user_finished_courses,
            NULL::bigint AS rate_count,
            date(enroll.created_at) AS created_at
           FROM public.course_enrolleds enroll
          GROUP BY enroll.course_id, (date(enroll.created_at))
        UNION ALL
         SELECT enroll.course_id,
            NULL::bigint AS orders,
            NULL::bigint AS total_price,
            NULL::bigint AS user_active,
            sum(enroll.number_of_learn) AS number_of_learns,
            NULL::bigint AS order_completed,
            NULL::bigint AS order_failed,
            NULL::bigint AS order_vnpay,
            NULL::bigint AS order_bank_transfer,
            NULL::bigint AS user_finished_courses,
            NULL::bigint AS rate_count,
            date(enroll.created_at) AS created_at
           FROM public.course_enrolleds enroll
          GROUP BY enroll.course_id, (date(enroll.created_at))
        UNION ALL
         SELECT oi.course_id,
            NULL::bigint AS orders,
            NULL::bigint AS total_price,
            NULL::bigint AS user_active,
            NULL::bigint AS number_of_learns,
            count(DISTINCT o.id) AS order_completed,
            NULL::bigint AS order_failed,
            NULL::bigint AS order_vnpay,
            NULL::bigint AS order_bank_transfer,
            NULL::bigint AS user_finished_courses,
            NULL::bigint AS rate_count,
            date(trans.created_at) AS created_at
           FROM ((public.transaction trans
             JOIN public.orders o ON ((o.transaction_id = trans.id)))
             JOIN public.orders_items oi ON ((oi.order_id = o.id)))
          WHERE (trans.status = 'COMPLETED'::public.transaction_status_enum)
          GROUP BY oi.course_id, (date(trans.created_at))
        UNION ALL
         SELECT oi.course_id,
            NULL::bigint AS orders,
            NULL::bigint AS total_price,
            NULL::bigint AS user_active,
            NULL::bigint AS number_of_learns,
            NULL::bigint AS order_completed,
            count(DISTINCT o.id) AS order_failed,
            NULL::bigint AS order_vnpay,
            NULL::bigint AS order_bank_transfer,
            NULL::bigint AS user_finished_courses,
            NULL::bigint AS rate_count,
            date(trans.created_at) AS date
           FROM ((public.orders_items oi
             JOIN public.orders o ON ((o.id = oi.order_id)))
             JOIN public.transaction trans ON ((o.transaction_id = trans.id)))
          WHERE (trans.status = 'FAILED'::public.transaction_status_enum)
          GROUP BY oi.course_id, (date(trans.created_at))
        UNION ALL
         SELECT oi.course_id,
            NULL::bigint AS orders,
            NULL::bigint AS total_price,
            NULL::bigint AS user_active,
            NULL::bigint AS number_of_learns,
            NULL::bigint AS order_completed,
            NULL::bigint AS order_failed,
            count(DISTINCT o.id) AS order_vnpay,
            NULL::bigint AS order_bank_transfer,
            NULL::bigint AS user_finished_courses,
            NULL::bigint AS rate_count,
            date(trans.created_at) AS created_at
           FROM ((public.orders_items oi
             JOIN public.orders o ON ((o.id = oi.order_id)))
             JOIN public.transaction trans ON ((o.transaction_id = trans.id)))
          WHERE (trans.payment_method = 'VNPAY'::public.transaction_payment_method_enum)
          GROUP BY oi.course_id, (date(trans.created_at))
        UNION ALL
         SELECT oi.course_id,
            NULL::bigint AS orders,
            NULL::bigint AS total_price,
            NULL::bigint AS user_active,
            NULL::bigint AS number_of_learns,
            NULL::bigint AS order_completed,
            NULL::bigint AS order_failed,
            NULL::bigint AS order_vnpay,
            count(DISTINCT o.id) AS order_bank_transfer,
            NULL::bigint AS user_finished_courses,
            NULL::bigint AS rate_count,
            date(trans.created_at) AS created_at
           FROM ((public.orders_items oi
             JOIN public.orders o ON ((o.id = oi.order_id)))
             JOIN public.transaction trans ON ((o.transaction_id = trans.id)))
          WHERE (trans.payment_method = 'BANK_TRANSFER'::public.transaction_payment_method_enum)
          GROUP BY oi.course_id, (date(trans.created_at))
        UNION ALL
         SELECT enroll.course_id,
            NULL::bigint AS orders,
            NULL::bigint AS total_price,
            NULL::bigint AS user_active,
            NULL::bigint AS number_of_learns,
            NULL::bigint AS order_completed,
            NULL::bigint AS order_failed,
            NULL::bigint AS order_vnpay,
            NULL::bigint AS order_bank_transfer,
            count(users.id) AS user_finished_courses,
            NULL::bigint AS rate_count,
            date(enroll.created_at) AS created_at
           FROM (public.course_enrolleds enroll
             LEFT JOIN public.users ON ((users.id = enroll.user_id)))
          WHERE ((enroll.user_id IS NOT NULL) AND (enroll.is_active = true))
          GROUP BY enroll.course_id, (date(enroll.created_at))
        UNION ALL
         SELECT r.course_id,
            NULL::bigint AS orders,
            NULL::bigint AS total_price,
            NULL::bigint AS user_active,
            NULL::bigint AS number_of_learns,
            NULL::bigint AS order_completed,
            NULL::bigint AS order_failed,
            NULL::bigint AS order_vnpay,
            NULL::bigint AS order_bank_transfer,
            NULL::bigint AS user_finished_courses,
            count(r.id) AS rate_count,
            date(r.created_at) AS created_at
           FROM public.reviews r
          GROUP BY r.course_id, (date(r.created_at))) res ON ((res.course_id = courses.id)))
  GROUP BY courses.id, courses.name, res.created_at;


ALTER VIEW public.course_overview_report OWNER TO vicoach;

--
-- TOC entry 257 (class 1259 OID 31916)
-- Name: course_related; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.course_related (
    "courseId" uuid NOT NULL,
    "courseRelatedId" uuid NOT NULL
);


ALTER TABLE public.course_related OWNER TO vicoach;

--
-- TOC entry 258 (class 1259 OID 31919)
-- Name: course_relateds; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.course_relateds (
    "courseId" uuid NOT NULL,
    "courseRelatedId" uuid NOT NULL
);


ALTER TABLE public.course_relateds OWNER TO vicoach;

--
-- TOC entry 259 (class 1259 OID 31922)
-- Name: course_statistic_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.course_statistic_report AS
 SELECT count(*) AS registrations,
    (0)::bigint AS orders,
    (0)::bigint AS prices,
    (0)::bigint AS user_actives,
    date(users.created_at) AS created_at
   FROM public.users
  WHERE (users.deleted_at IS NULL)
  GROUP BY (date(users.created_at))
UNION ALL
 SELECT (0)::bigint AS registrations,
    count(*) AS orders,
    (0)::bigint AS prices,
    (0)::bigint AS user_actives,
    date(orders.created_at) AS created_at
   FROM public.orders
  GROUP BY (date(orders.created_at))
UNION ALL
 SELECT (0)::bigint AS registrations,
    (0)::bigint AS orders,
    sum(orders.price) AS prices,
    (0)::bigint AS user_actives,
    date(orders.created_at) AS created_at
   FROM public.orders
  GROUP BY (date(orders.created_at))
UNION ALL
 SELECT (0)::bigint AS registrations,
    (0)::bigint AS orders,
    (0)::bigint AS prices,
    count(users.id) AS user_actives,
    date(ce.created_at) AS created_at
   FROM (public.course_enrolleds ce
     LEFT JOIN public.users ON (((ce.user_id = users.id) AND (ce.user_id IS NOT NULL) AND (users.deleted_at IS NULL))))
  GROUP BY (date(ce.created_at));


ALTER VIEW public.course_statistic_report OWNER TO vicoach;

--
-- TOC entry 260 (class 1259 OID 31927)
-- Name: course_tag; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.course_tag (
    "courseId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);


ALTER TABLE public.course_tag OWNER TO vicoach;

--
-- TOC entry 261 (class 1259 OID 31930)
-- Name: dashboard_course_overview_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.dashboard_course_overview_report AS
 SELECT c.id AS course_id,
    c.name AS course_name,
    count(ce.id) AS user_count,
    count(ce.id) FILTER (WHERE (ce.is_finished = true)) AS finished_count,
    round(
        CASE
            WHEN (count(ce.id) = 0) THEN (0)::numeric
            ELSE (((count(ce.id) FILTER (WHERE (ce.is_finished = true)))::numeric * 100.0) / (count(ce.id))::numeric)
        END, 2) AS percent_finished,
    c.duration_text AS duration,
    c.created_at
   FROM ((public.courses c
     LEFT JOIN public.course_enrolleds ce ON ((ce.course_id = c.id)))
     LEFT JOIN public.users u ON ((ce.user_id = u.id)))
  WHERE ((ce.deleted_at IS NULL) AND (u.deleted_at IS NULL) AND (c.deleted_at IS NULL))
  GROUP BY c.id, c.name, c.duration_text, c.created_at;


ALTER VIEW public.dashboard_course_overview_report OWNER TO vicoach;

--
-- TOC entry 262 (class 1259 OID 31935)
-- Name: take_quiz; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.take_quiz (
    id uuid NOT NULL,
    score double precision,
    title character varying NOT NULL,
    start_time timestamp without time zone NOT NULL,
    end_time timestamp without time zone,
    duration integer NOT NULL,
    status public.take_quiz_status_enum DEFAULT 'inprogress'::public.take_quiz_status_enum NOT NULL,
    type public.take_quiz_type_enum DEFAULT 'ENROLL'::public.take_quiz_type_enum NOT NULL,
    user_id uuid,
    lesson_id uuid,
    quiz_enrolled_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.take_quiz OWNER TO vicoach;

--
-- TOC entry 263 (class 1259 OID 31944)
-- Name: detail_course_enrolled_user_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.detail_course_enrolled_user_report AS
 SELECT ce.user_id,
    c.id AS course_id,
    c.name AS course_name,
    c.url_detail_img AS detail_image,
    ce.percentage,
    ce.number_of_learn,
    COALESCE(count(lp.id), (0)::bigint) AS lesson_learned,
    COALESCE(sum(lp.interactive_time), (0)::bigint) AS time_of_learn,
    COALESCE(sum(lp.interactive_time), (0)::bigint) AS real_time_of_learn,
    COALESCE(count(q.id), (0)::bigint) AS number_of_exam,
    COALESCE(sum(lp.score), (0)::double precision) AS total_score,
    date(ce.created_at) AS created_at
   FROM (((public.course_enrolleds ce
     LEFT JOIN public.courses c ON ((c.id = ce.course_id)))
     LEFT JOIN public.lesson_progress lp ON ((lp.course_enrolled_id = ce.id)))
     LEFT JOIN public.take_quiz q ON (((q.lesson_id = lp.lesson_id) AND (lp.user_id = q.user_id))))
  GROUP BY ce.user_id, c.id, c.name, c.url_detail_img, ce.percentage, ce.number_of_learn, (date(ce.created_at));


ALTER VIEW public.detail_course_enrolled_user_report OWNER TO vicoach;

--
-- TOC entry 264 (class 1259 OID 31949)
-- Name: discussions; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.discussions (
    id uuid NOT NULL,
    text text NOT NULL,
    deleted_at timestamp without time zone,
    user_id uuid,
    lesson_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    discuss_id uuid,
    is_private boolean DEFAULT false NOT NULL,
    parent_id uuid
);


ALTER TABLE public.discussions OWNER TO vicoach;

--
-- TOC entry 265 (class 1259 OID 31957)
-- Name: notes; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.notes (
    id uuid NOT NULL,
    text_note text NOT NULL,
    time_maker integer DEFAULT 0 NOT NULL,
    deleted_at timestamp without time zone,
    lesson_progress_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.notes OWNER TO vicoach;

--
-- TOC entry 266 (class 1259 OID 31965)
-- Name: detail_course_overview_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.detail_course_overview_report AS
 SELECT ce.course_id,
    courses.name AS course_name,
    users.id AS user_id,
    users.email,
    users.phone_number,
    date(ce.created_at) AS start_at,
    ce.latest_lesson_date,
    ce.percentage,
    ce.number_of_learn,
    date(ce.completion_date) AS completion_date,
    discuss.discuss_id,
    notes.note_id,
    notes.created_at AS note_created_at,
    discuss.created_at AS discuss_created_at,
    date(ce.created_at) AS created_at
   FROM ((((public.course_enrolleds ce
     LEFT JOIN public.users ON ((ce.user_id = users.id)))
     LEFT JOIN public.courses ON ((courses.id = ce.course_id)))
     FULL JOIN ( SELECT chapters.course_id,
            dis.user_id,
            dis.id AS discuss_id,
            date(dis.created_at) AS created_at
           FROM ((public.discussions dis
             LEFT JOIN public.lessons ON ((lessons.id = dis.lesson_id)))
             LEFT JOIN public.chapters ON ((chapters.id = lessons.chapter_id)))) discuss ON (((discuss.course_id = ce.course_id) AND (users.id = discuss.user_id))))
     FULL JOIN ( SELECT lp.course_id,
            lp.user_id,
            notes_1.id AS note_id,
            date(notes_1.created_at) AS created_at
           FROM (public.notes notes_1
             LEFT JOIN public.lesson_progress lp ON ((lp.id = notes_1.lesson_progress_id)))) notes ON (((notes.course_id = ce.course_id) AND (notes.user_id = users.id))))
  WHERE (courses.deleted_at IS NULL);


ALTER VIEW public.detail_course_overview_report OWNER TO vicoach;

--
-- TOC entry 267 (class 1259 OID 31970)
-- Name: detail_course_user_count_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.detail_course_user_count_report AS
 SELECT ce.course_id,
    date(ce.created_at) AS created_at,
    count(users.id) AS user_count
   FROM ((public.course_enrolleds ce
     LEFT JOIN public.courses c ON ((c.id = ce.course_id)))
     LEFT JOIN public.users ON ((users.id = ce.user_id)))
  WHERE ((c.deleted_at IS NULL) AND (users.deleted_at IS NULL))
  GROUP BY (date(ce.created_at)), ce.course_id;


ALTER VIEW public.detail_course_user_count_report OWNER TO vicoach;

--
-- TOC entry 268 (class 1259 OID 31975)
-- Name: detail_course_user_finished_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.detail_course_user_finished_report AS
 SELECT ce.course_id,
    round(((((count(DISTINCT
        CASE
            WHEN (ce.is_finished = true) THEN ce.user_id
            ELSE NULL::uuid
        END))::numeric * 1.0) / (count(DISTINCT ce.user_id))::numeric) * (100)::numeric)) AS percentage,
    0 AS avg_complete_time,
    0 AS course_enrolled_count
   FROM (public.course_enrolleds ce
     LEFT JOIN public.courses c ON ((c.id = ce.course_id)))
  WHERE (c.deleted_at IS NULL)
  GROUP BY ce.course_id
UNION ALL
 SELECT ce.course_id,
    0 AS percentage,
    avg(ce.completion_time) AS avg_complete_time,
    count(ce.id) AS course_enrolled_count
   FROM (public.course_enrolleds ce
     LEFT JOIN public.courses c ON ((c.id = ce.course_id)))
  WHERE ((ce.is_finished = true) AND (c.deleted_at IS NULL))
  GROUP BY ce.course_id;


ALTER VIEW public.detail_course_user_finished_report OWNER TO vicoach;

--
-- TOC entry 269 (class 1259 OID 31980)
-- Name: topic_sets; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.topic_sets (
    id uuid NOT NULL,
    title character varying NOT NULL,
    description text,
    type public.topic_sets_type_enum NOT NULL,
    is_reverse_question boolean DEFAULT false NOT NULL,
    is_display_description boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    deleted_at timestamp without time zone
);


ALTER TABLE public.topic_sets OWNER TO vicoach;

--
-- TOC entry 270 (class 1259 OID 31989)
-- Name: detail_exam_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.detail_exam_report AS
 SELECT ts.id AS topic_set_id,
    tq.id AS take_quiz_id,
    u.id AS user_id,
    concat(u.first_name, ' ', u.last_name) AS user_name,
    u.email,
    tq.start_time,
    tq.end_time,
    tq.score,
    tq.status
   FROM (((public.take_quiz tq
     LEFT JOIN public.users u ON ((tq.user_id = u.id)))
     LEFT JOIN public.lessons l ON ((tq.lesson_id = l.id)))
     LEFT JOIN public.topic_sets ts ON ((ts.id = l.quiz_id)))
  WHERE ((u.deleted_at IS NULL) AND (l.deleted_at IS NULL));


ALTER VIEW public.detail_exam_report OWNER TO vicoach;

--
-- TOC entry 271 (class 1259 OID 31994)
-- Name: discussions_closure; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.discussions_closure (
    id_ancestor uuid NOT NULL,
    id_descendant uuid NOT NULL
);


ALTER TABLE public.discussions_closure OWNER TO vicoach;

--
-- TOC entry 272 (class 1259 OID 31997)
-- Name: exam_periods; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.exam_periods (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    start_date timestamp without time zone NOT NULL,
    end_date timestamp without time zone NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    status character varying(50) DEFAULT 'PENDING'::character varying NOT NULL,
    student_count integer DEFAULT 0 NOT NULL,
    configuration jsonb,
    topic_set_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.exam_periods OWNER TO vicoach;

--
-- TOC entry 273 (class 1259 OID 32007)
-- Name: fcm_tokens; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.fcm_tokens (
    session_id uuid NOT NULL,
    token character varying NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.fcm_tokens OWNER TO vicoach;

--
-- TOC entry 274 (class 1259 OID 32014)
-- Name: files; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.files (
    id uuid NOT NULL,
    title character varying NOT NULL,
    type character varying(15) NOT NULL,
    size integer DEFAULT 0 NOT NULL,
    folder_id uuid,
    video_id uuid,
    library_id integer,
    embed_host character varying DEFAULT ''::character varying,
    status integer DEFAULT 0,
    collection_id character varying DEFAULT ''::character varying,
    mimetype character varying DEFAULT ''::character varying,
    name character varying DEFAULT ''::character varying,
    path character varying DEFAULT ''::character varying,
    storage_zone_name character varying DEFAULT ''::character varying,
    pull_zone_host character varying DEFAULT ''::character varying,
    model_name character varying NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    stream_host character varying DEFAULT ''::character varying,
    thumbnail_url character varying DEFAULT ''::character varying
);


ALTER TABLE public.files OWNER TO vicoach;

--
-- TOC entry 275 (class 1259 OID 32032)
-- Name: files-usage; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."files-usage" (
    model character varying NOT NULL,
    model_id uuid NOT NULL,
    file_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public."files-usage" OWNER TO vicoach;

--
-- TOC entry 276 (class 1259 OID 32039)
-- Name: folders; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.folders (
    id uuid NOT NULL,
    title character varying NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.folders OWNER TO vicoach;

--
-- TOC entry 277 (class 1259 OID 32046)
-- Name: groups; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.groups (
    id uuid NOT NULL,
    name character varying(255) DEFAULT ''::character varying NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.groups OWNER TO vicoach;

--
-- TOC entry 278 (class 1259 OID 32054)
-- Name: interactive_lesson; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.interactive_lesson (
    id uuid NOT NULL,
    user_id character varying NOT NULL,
    interactive_time integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.interactive_lesson OWNER TO vicoach;

--
-- TOC entry 279 (class 1259 OID 32061)
-- Name: labels; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.labels (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    deleted_at timestamp without time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.labels OWNER TO vicoach;

--
-- TOC entry 280 (class 1259 OID 32068)
-- Name: lessons_sequence_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.lessons_sequence_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.lessons_sequence_seq OWNER TO vicoach;

--
-- TOC entry 4934 (class 0 OID 0)
-- Dependencies: 280
-- Name: lessons_sequence_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.lessons_sequence_seq OWNED BY public.lessons.sequence;


--
-- TOC entry 281 (class 1259 OID 32069)
-- Name: list_course_enrolled_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.list_course_enrolled_report AS
 SELECT c.id AS course_id,
    ce.id AS course_enrolled_id,
    u.id AS user_id,
    concat(u.first_name, ' ', u.last_name) AS user_name,
    u.image,
    u.email,
    ce.created_at,
    ce.updated_at,
    u.online_duration,
    ce.learning_times,
    ce.percentage,
    0 AS score
   FROM ((public.course_enrolleds ce
     LEFT JOIN public.courses c ON ((c.id = ce.course_id)))
     LEFT JOIN public.users u ON ((u.id = ce.user_id)))
  WHERE ((u.deleted_at IS NULL) AND (c.deleted_at IS NULL));


ALTER VIEW public.list_course_enrolled_report OWNER TO vicoach;

--
-- TOC entry 282 (class 1259 OID 32074)
-- Name: list_user_participated_course_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.list_user_participated_course_report AS
 SELECT ce.course_id,
    u.id AS user_id,
    u.image,
    (((u.last_name)::text || ' '::text) || (u.first_name)::text) AS full_name,
    u.email,
    date(ce.created_at) AS start_date,
    date(ce.latest_lesson_date) AS latest_date,
    u.online_duration AS online,
    lp.interactive_time,
    ce.percentage,
    COALESCE(sum(lp.score), (0)::double precision) AS score,
    date(ce.created_at) AS created_at
   FROM ((public.course_enrolleds ce
     LEFT JOIN public.users u ON ((ce.user_id = u.id)))
     LEFT JOIN public.lesson_progress lp ON ((lp.course_id = ce.course_id)))
  GROUP BY ce.course_id, u.id, u.image, u.first_name, u.last_name, u.email, ce.created_at, ce.latest_lesson_date, u.online_duration, lp.interactive_time, ce.percentage;


ALTER VIEW public.list_user_participated_course_report OWNER TO vicoach;


--
-- TOC entry 285 (class 1259 OID 32085)
-- Name: notification_customs; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.notification_customs (
    id uuid NOT NULL,
    type public.notification_customs_type_enum DEFAULT 'GENERAL'::public.notification_customs_type_enum NOT NULL,
    name text NOT NULL,
    "interval" integer DEFAULT 60000,
    cron text DEFAULT '* */1 * * * *'::text,
    time_out integer DEFAULT 0,
    content text DEFAULT ''::text NOT NULL,
    title text DEFAULT ''::text NOT NULL,
    link text,
    is_active boolean DEFAULT false NOT NULL,
    is_one_time boolean DEFAULT false NOT NULL,
    is_incontinently boolean DEFAULT false NOT NULL,
    start_date timestamp with time zone,
    end_date timestamp with time zone,
    active_at timestamp with time zone,
    status public.notification_customs_status_enum DEFAULT 'DRAFT'::public.notification_customs_status_enum NOT NULL,
    deleted_at timestamp without time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.notification_customs OWNER TO vicoach;

--
-- TOC entry 286 (class 1259 OID 32102)
-- Name: notification_customs_users; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.notification_customs_users (
    notification_custom_id uuid NOT NULL,
    user_id uuid NOT NULL
);


ALTER TABLE public.notification_customs_users OWNER TO vicoach;

--
-- TOC entry 287 (class 1259 OID 32105)
-- Name: notifications; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.notifications (
    id uuid NOT NULL,
    subject json NOT NULL,
    subject_count integer DEFAULT 1 NOT NULL,
    d_object json DEFAULT '{}'::json NOT NULL,
    ind_object json DEFAULT '{}'::json NOT NULL,
    pre_object json DEFAULT '{}'::json NOT NULL,
    topic character varying DEFAULT ''::character varying NOT NULL,
    image_url character varying DEFAULT ''::character varying NOT NULL,
    key character varying NOT NULL,
    is_read boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.notifications OWNER TO vicoach;

--
-- TOC entry 288 (class 1259 OID 32119)
-- Name: notifications_to_users; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.notifications_to_users (
    user_id uuid NOT NULL,
    notification_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.notifications_to_users OWNER TO vicoach;

--
-- TOC entry 289 (class 1259 OID 32126)
-- Name: order_quantity_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.order_quantity_report AS
 SELECT count(DISTINCT o.id) AS order_count,
    date(trans.created_at) AS created_at
   FROM (public.transaction trans
     LEFT JOIN public.orders o ON ((trans.id = o.transaction_id)))
  WHERE (trans.status = 'COMPLETED'::public.transaction_status_enum)
  GROUP BY (date(trans.created_at));


ALTER VIEW public.order_quantity_report OWNER TO vicoach;

--
-- TOC entry 290 (class 1259 OID 32131)
-- Name: page_managers; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.page_managers (
    id uuid NOT NULL,
    name character varying(200) NOT NULL,
    slug character varying(200),
    content text,
    deleted_at timestamp without time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    config jsonb,
    type public.page_managers_type_enum DEFAULT 'CONTENT'::public.page_managers_type_enum NOT NULL,
    is_home boolean DEFAULT false NOT NULL,
    is_active boolean DEFAULT false NOT NULL,
    keyword jsonb
);


ALTER TABLE public.page_managers OWNER TO vicoach;

--
-- TOC entry 291 (class 1259 OID 32141)
-- Name: permissions; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.permissions (
    id uuid NOT NULL,
    slug character varying(200) NOT NULL,
    description character varying(160) NOT NULL,
    "group" character varying(100) DEFAULT 'Khác'::character varying NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.permissions OWNER TO vicoach;

--
-- TOC entry 292 (class 1259 OID 32150)
-- Name: popup; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.popup (
    id uuid NOT NULL,
    content text NOT NULL,
    display_size public.popup_display_size_enum DEFAULT 'medium'::public.popup_display_size_enum NOT NULL,
    start_time timestamp without time zone NOT NULL,
    end_time timestamp without time zone NOT NULL,
    frequency_days integer NOT NULL,
    display_delay_seconds integer NOT NULL,
    article_link character varying NOT NULL,
    is_enabled boolean NOT NULL,
    account_display_popup public.popup_account_display_popup_enum NOT NULL,
    deleted_at timestamp without time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.popup OWNER TO vicoach;

--
-- TOC entry 293 (class 1259 OID 32158)
-- Name: prices; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.prices (
    id uuid NOT NULL,
    original_price double precision DEFAULT '0'::double precision NOT NULL,
    is_hide_price boolean DEFAULT false NOT NULL,
    is_use_date_limit boolean DEFAULT false NOT NULL,
    duration integer DEFAULT 0 NOT NULL,
    is_show_duration boolean DEFAULT false NOT NULL,
    is_apply_promotion boolean DEFAULT false NOT NULL,
    is_special_discount boolean DEFAULT false NOT NULL,
    promotion_from_date timestamp without time zone,
    promotion_to_date timestamp without time zone,
    is_hide_promotion_time boolean DEFAULT false NOT NULL,
    deleted_at timestamp without time zone,
    course_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    promotion_price double precision,
    final_price double precision DEFAULT '0'::double precision NOT NULL
);


ALTER TABLE public.prices OWNER TO vicoach;

--
-- TOC entry 294 (class 1259 OID 32174)
-- Name: promo_code_used; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.promo_code_used (
    id uuid NOT NULL,
    user_id uuid,
    promo_code_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.promo_code_used OWNER TO vicoach;

--
-- TOC entry 295 (class 1259 OID 32181)
-- Name: promo_codes; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.promo_codes (
    id uuid NOT NULL,
    name character varying NOT NULL,
    discount_code character varying NOT NULL,
    usage_limit integer NOT NULL,
    promotion_type public.promo_codes_promotion_type_enum,
    discount_value integer NOT NULL,
    start_date timestamp without time zone NOT NULL,
    end_date timestamp without time zone NOT NULL,
    deleted_at timestamp without time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    type public.promo_codes_type_enum DEFAULT 'SINGLE_USE'::public.promo_codes_type_enum NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    condition_id uuid,
    used_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.promo_codes OWNER TO vicoach;

--
-- TOC entry 296 (class 1259 OID 32191)
-- Name: promo_conditions; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.promo_conditions (
    id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    account_created_at timestamp without time zone NOT NULL,
    account_created_at_operator public.promo_conditions_account_created_at_operator_enum DEFAULT '<'::public.promo_conditions_account_created_at_operator_enum NOT NULL,
    count_course integer NOT NULL,
    count_course_operator public.promo_conditions_count_course_operator_enum DEFAULT '<'::public.promo_conditions_count_course_operator_enum NOT NULL
);


ALTER TABLE public.promo_conditions OWNER TO vicoach;

--
-- TOC entry 297 (class 1259 OID 32200)
-- Name: question_conditions; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.question_conditions (
    id uuid NOT NULL,
    survey_id uuid,
    question_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.question_conditions OWNER TO vicoach;

--
-- TOC entry 298 (class 1259 OID 32207)
-- Name: questions; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.questions (
    id uuid NOT NULL,
    type public.questions_type_enum NOT NULL,
    question_text character varying NOT NULL,
    file_url character varying,
    is_position_reversal boolean DEFAULT false NOT NULL,
    difficulty public.questions_difficulty_enum NOT NULL,
    scope public.questions_scope_enum NOT NULL,
    is_answer_explanation boolean DEFAULT false NOT NULL,
    answer_explanation character varying,
    is_reverse_choice boolean DEFAULT false NOT NULL,
    deleted_at timestamp without time zone,
    topic_set_id uuid,
    survey_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.questions OWNER TO vicoach;

--
-- TOC entry 299 (class 1259 OID 32217)
-- Name: questions_labels_labels; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.questions_labels_labels (
    questions_id uuid NOT NULL,
    labels_id uuid NOT NULL
);


ALTER TABLE public.questions_labels_labels OWNER TO vicoach;

--
-- TOC entry 300 (class 1259 OID 32220)
-- Name: quiz; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.quiz (
    id uuid NOT NULL,
    score double precision,
    title character varying NOT NULL,
    start_time timestamp without time zone NOT NULL,
    end_time timestamp without time zone,
    duration integer NOT NULL,
    status public.quiz_status_enum DEFAULT 'inprogress'::public.quiz_status_enum NOT NULL,
    user_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    lesson_id uuid
);


ALTER TABLE public.quiz OWNER TO vicoach;

--
-- TOC entry 301 (class 1259 OID 32228)
-- Name: quiz_answer; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.quiz_answer (
    id uuid NOT NULL,
    is_correct boolean DEFAULT false NOT NULL,
    text_answer character varying,
    type_disc public.quiz_answer_type_disc_enum,
    quiz_question_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.quiz_answer OWNER TO vicoach;

--
-- TOC entry 302 (class 1259 OID 32236)
-- Name: quiz_enrolled; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.quiz_enrolled (
    id uuid NOT NULL,
    title character varying NOT NULL,
    duration integer DEFAULT 60 NOT NULL,
    attempt_count integer DEFAULT 1 NOT NULL,
    user_id uuid,
    topic_set_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.quiz_enrolled OWNER TO vicoach;

--
-- TOC entry 303 (class 1259 OID 32245)
-- Name: quiz_question; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.quiz_question (
    id uuid NOT NULL,
    type public.quiz_question_type_enum NOT NULL,
    question_text character varying NOT NULL,
    answer_explanation character varying,
    quiz_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    score integer DEFAULT 1 NOT NULL,
    your_score integer DEFAULT 0 NOT NULL,
    your_answer character varying
);


ALTER TABLE public.quiz_question OWNER TO vicoach;

--
-- TOC entry 304 (class 1259 OID 32254)
-- Name: rates; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.rates (
    id uuid NOT NULL,
    rate integer DEFAULT 0 NOT NULL,
    count integer DEFAULT 0 NOT NULL,
    deleted_at timestamp without time zone,
    course_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.rates OWNER TO vicoach;

--
-- TOC entry 305 (class 1259 OID 32263)
-- Name: revenue_statistic_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.revenue_statistic_report AS
 SELECT date(trans.created_at) AS created_at,
    sum(trans.amount) AS total_prices
   FROM (public.orders
     LEFT JOIN public.transaction trans ON ((orders.transaction_id = trans.id)))
  WHERE (trans.status = 'COMPLETED'::public.transaction_status_enum)
  GROUP BY (date(trans.created_at));


ALTER VIEW public.revenue_statistic_report OWNER TO vicoach;

--
-- TOC entry 306 (class 1259 OID 32268)
-- Name: roles; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.roles (
    id uuid NOT NULL,
    slug character varying(50) NOT NULL,
    name character varying(50) NOT NULL,
    can_delete boolean DEFAULT true NOT NULL,
    can_edit boolean DEFAULT true NOT NULL,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.roles OWNER TO vicoach;

--
-- TOC entry 307 (class 1259 OID 32278)
-- Name: roles_permissions; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.roles_permissions (
    role_id uuid NOT NULL,
    permission_id uuid NOT NULL
);


ALTER TABLE public.roles_permissions OWNER TO vicoach;

--
-- TOC entry 308 (class 1259 OID 32281)
-- Name: session; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.session (
    id uuid NOT NULL,
    hash character varying(255) NOT NULL,
    device_id character varying(50) NOT NULL,
    device character varying(50) NOT NULL,
    os character varying(50) NOT NULL,
    user_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    ip character varying(40) NOT NULL,
    expires timestamp with time zone
);


ALTER TABLE public.session OWNER TO vicoach;

--
-- TOC entry 309 (class 1259 OID 32288)
-- Name: settings; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.settings (
    data jsonb NOT NULL,
    description text DEFAULT ''::text NOT NULL,
    key character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.settings OWNER TO vicoach;

--
-- TOC entry 310 (class 1259 OID 32296)
-- Name: student_course_summary; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.student_course_summary AS
SELECT
    NULL::uuid AS course_id,
    NULL::uuid AS course_enrolled_id,
    NULL::timestamp with time zone AS created_at,
    NULL::character varying AS name,
    NULL::character varying(200) AS slug,
    NULL::jsonb AS url_widget_img,
    NULL::uuid AS user_id,
    NULL::double precision AS percentage,
    NULL::integer AS learning_times,
    NULL::bigint AS total_interactive_time,
    NULL::double precision AS total_score,
    NULL::bigint AS total_duration,
    NULL::bigint AS finished_lessons;


ALTER VIEW public.student_course_summary OWNER TO vicoach;

--
-- TOC entry 311 (class 1259 OID 32300)
-- Name: surveys; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.surveys (
    id uuid NOT NULL,
    title character varying(200) NOT NULL,
    description character varying,
    deleted_at timestamp without time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.surveys OWNER TO vicoach;

--
-- TOC entry 312 (class 1259 OID 32307)
-- Name: tags; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.tags (
    id uuid NOT NULL,
    name character varying(200) NOT NULL,
    iamge_url character varying,
    deleted_at timestamp without time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    slug character varying(200),
    tag_type public.tags_tag_type_enum DEFAULT 'TOPIC'::public.tags_tag_type_enum
);


ALTER TABLE public.tags OWNER TO vicoach;

--
-- TOC entry 313 (class 1259 OID 32315)
-- Name: temp_files; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.temp_files (
    id uuid NOT NULL,
    type character varying(15) NOT NULL,
    is_used boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    title character varying(255) NOT NULL,
    size bigint DEFAULT '0'::bigint NOT NULL,
    model_name character varying(100) DEFAULT ''::character varying NOT NULL,
    model_id character varying(50) DEFAULT ''::character varying NOT NULL,
    mimetype character varying(100) DEFAULT ''::character varying NOT NULL,
    name character varying(255) DEFAULT ''::character varying NOT NULL,
    path character varying(255) DEFAULT ''::character varying NOT NULL,
    storage_zone_name character varying(100) DEFAULT ''::character varying NOT NULL,
    pull_zone_host character varying(255) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.temp_files OWNER TO vicoach;

--
-- TOC entry 314 (class 1259 OID 32331)
-- Name: top_active_student_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.top_active_student_report AS
 SELECT id AS user_id,
    first_name,
    last_name,
    image,
    online_duration
   FROM public.users u
  WHERE (deleted_at IS NULL);


ALTER VIEW public.top_active_student_report OWNER TO vicoach;

--
-- TOC entry 315 (class 1259 OID 32335)
-- Name: top_list_course_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.top_list_course_report AS
 SELECT course_id,
    count(id) AS active,
    date(created_at) AS created_at
   FROM public.course_enrolleds ce
  GROUP BY course_id, (date(created_at));


ALTER VIEW public.top_list_course_report OWNER TO vicoach;

--
-- TOC entry 316 (class 1259 OID 32339)
-- Name: topic_set_condition; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.topic_set_condition (
    id uuid NOT NULL,
    number_of_questions integer,
    question_type public.topic_set_condition_question_type_enum,
    difficulty_level public.topic_set_condition_difficulty_level_enum,
    topic_set_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.topic_set_condition OWNER TO vicoach;

--
-- TOC entry 317 (class 1259 OID 32346)
-- Name: topic_set_condition_label; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.topic_set_condition_label (
    label_id uuid NOT NULL,
    topic_set_condition_id uuid NOT NULL
);


ALTER TABLE public.topic_set_condition_label OWNER TO vicoach;

--
-- TOC entry 318 (class 1259 OID 32349)
-- Name: topic_set_labels; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.topic_set_labels (
    topic_set_id uuid NOT NULL,
    label_id uuid NOT NULL
);


ALTER TABLE public.topic_set_labels OWNER TO vicoach;

--
-- TOC entry 319 (class 1259 OID 32352)
-- Name: topic_set_question; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.topic_set_question (
    id uuid NOT NULL,
    score integer DEFAULT 1 NOT NULL,
    topic_set_id uuid,
    question_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying
);


ALTER TABLE public.topic_set_question OWNER TO vicoach;

--
-- TOC entry 320 (class 1259 OID 32360)
-- Name: topic_set_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.topic_set_report AS
 SELECT ts.id AS topic_set_id,
    ts.title AS quiz_name,
    c.name AS course_name,
    tq.duration,
    count(tq.id) FILTER (WHERE (tq.status <> 'pending'::public.take_quiz_status_enum)) AS inprogress_count,
    count(tq.id) FILTER (WHERE (tq.status <> ALL (ARRAY['pending'::public.take_quiz_status_enum, 'inprogress'::public.take_quiz_status_enum]))) AS finished_count,
    count(tq.id) FILTER (WHERE (tq.status = ANY (ARRAY['completed'::public.take_quiz_status_enum, 'expired'::public.take_quiz_status_enum]))) AS graded_count,
    COALESCE(avg(tq.score), (0)::double precision) AS avg_score,
    count(tq.id) FILTER (WHERE (tq.status = ANY (ARRAY['completed'::public.take_quiz_status_enum, 'expired'::public.take_quiz_status_enum]))) AS pass
   FROM ((((public.topic_sets ts
     LEFT JOIN public.lessons l ON ((l.quiz_id = ts.id)))
     LEFT JOIN public.chapters chap ON ((chap.id = l.chapter_id)))
     LEFT JOIN public.courses c ON ((c.id = chap.course_id)))
     LEFT JOIN public.take_quiz tq ON ((tq.lesson_id = l.id)))
  WHERE ((l.deleted_at IS NULL) AND (ts.deleted_at IS NULL) AND (c.deleted_at IS NULL))
  GROUP BY ts.id, ts.title, c.name, tq.duration;


ALTER VIEW public.topic_set_report OWNER TO vicoach;

--
-- TOC entry 321 (class 1259 OID 32365)
-- Name: topic_sets_labels_labels; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.topic_sets_labels_labels (
    topic_sets_id uuid NOT NULL,
    labels_id uuid NOT NULL
);


ALTER TABLE public.topic_sets_labels_labels OWNER TO vicoach;

--
-- TOC entry 322 (class 1259 OID 32368)
-- Name: topics; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.topics (
    id uuid NOT NULL,
    name character varying(200) NOT NULL,
    slug character varying(200) NOT NULL,
    deleted_at timestamp without time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    is_show boolean DEFAULT true NOT NULL,
    image_url jsonb,
    is_trending boolean DEFAULT false NOT NULL
);


ALTER TABLE public.topics OWNER TO vicoach;

--
-- TOC entry 323 (class 1259 OID 32377)
-- Name: typeorm_metadata; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.typeorm_metadata (
    type character varying NOT NULL,
    database character varying,
    schema character varying,
    "table" character varying,
    name character varying,
    value text
);


ALTER TABLE public.typeorm_metadata OWNER TO vicoach;

--
-- TOC entry 324 (class 1259 OID 32382)
-- Name: user-quiz-answer; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."user-quiz-answer" (
    id uuid NOT NULL,
    quiz_id uuid,
    quiz_question_id uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_by character varying,
    user_id character varying NOT NULL,
    answer character varying
);


ALTER TABLE public."user-quiz-answer" OWNER TO vicoach;

--
-- TOC entry 325 (class 1259 OID 32389)
-- Name: user_account_report; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.user_account_report AS
 SELECT date(created_at) AS created_at,
    count(id) AS user_count
   FROM public.users
  WHERE (deleted_at IS NULL)
  GROUP BY (date(created_at));


ALTER VIEW public.user_account_report OWNER TO vicoach;

--
-- TOC entry 326 (class 1259 OID 32393)
-- Name: user_course_progress; Type: VIEW; Schema: public; Owner: admin
--

CREATE VIEW public.user_course_progress AS
 SELECT u.id AS user_id,
    u.online_duration,
    u.first_name,
    u.last_name,
    u.username,
    concat(u.first_name, ' ', u.last_name) AS full_name,
    u.created_at,
    count(DISTINCT ce.course_id) FILTER (WHERE ((ce.is_finished = true) AND (ce.deleted_at IS NULL) AND (c.deleted_at IS NULL))) AS total_finished_courses,
    COALESCE(sum(l.duration) FILTER (WHERE ((ce.deleted_at IS NULL) AND (c.deleted_at IS NULL))), (0)::bigint) AS total_learning_duration,
    u.number_of_course AS total_enrolled_courses
   FROM (((public.users u
     LEFT JOIN public.course_enrolleds ce ON (((u.id = ce.user_id) AND (ce.deleted_at IS NULL))))
     LEFT JOIN public.courses c ON (((c.id = ce.course_id) AND (c.deleted_at IS NULL))))
     LEFT JOIN public.lessons l ON (((c.id = l.course_id) AND (l.deleted_at IS NULL))))
  WHERE (u.deleted_at IS NULL)
  GROUP BY u.id, u.online_duration, u.first_name, u.last_name, u.username, u.created_at, u.number_of_course;


ALTER VIEW public.user_course_progress OWNER TO vicoach;

--
-- TOC entry 327 (class 1259 OID 32398)
-- Name: users_groups; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.users_groups (
    group_id uuid NOT NULL,
    user_id uuid NOT NULL
);


ALTER TABLE public.users_groups OWNER TO vicoach;

--
-- TOC entry 328 (class 1259 OID 32401)
-- Name: users_permissions; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.users_permissions (
    user_id uuid NOT NULL,
    permission_id uuid NOT NULL
);


ALTER TABLE public.users_permissions OWNER TO vicoach;

--
-- TOC entry 329 (class 1259 OID 32404)
-- Name: users_roles; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.users_roles (
    user_id uuid NOT NULL,
    role_id uuid NOT NULL
);


ALTER TABLE public.users_roles OWNER TO vicoach;

--
-- TOC entry 3943 (class 2604 OID 32407)
-- Name: chapters sequence; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.chapters ALTER COLUMN sequence SET DEFAULT nextval('public.chapters_sequence_seq'::regclass);


--
-- TOC entry 3951 (class 2604 OID 32408)
-- Name: course-combos sequence; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."course-combos" ALTER COLUMN sequence SET DEFAULT nextval('public."course-combos_sequence_seq"'::regclass);


--
-- TOC entry 3838 (class 2604 OID 32409)
-- Name: lessons sequence; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.lessons ALTER COLUMN sequence SET DEFAULT nextval('public.lessons_sequence_seq'::regclass);





--
-- TOC entry 4837 (class 0 OID 31667)
-- Dependencies: 224
-- Data for Name: affiliate_histories; Type: TABLE DATA; Schema: public; Owner: admin
--

        
        `);

    await queryRunner.query(`
      INSERT INTO public.roles (
        id, slug, name, can_delete, can_edit, active,  created_by,  updated_by
      ) VALUES
        (
          '0196807b-90f4-763e-8a1e-783d186043b1', 'admin', 'admin',
          true, true, true,  'system', 'system'
        ),
        (
          '0196807b-90f4-763e-8a1e-7e6f3ac8dbe6', 'manager', 'manager',
          true, true, true,  'system','system'
        ),
        (
          '0196807b-90f4-763e-8a1e-824ace90d624', 'user', 'user',
          true, true, true, 'system', 'system'
        );
    `);

    await queryRunner.query(`
      INSERT INTO public.users (
        id, username, first_name, last_name, email, phone_number, address, 
        date_of_birth, password, bio, image, number_of_course, is_super_user, 
        refer_code, provider, social_id, is_internal,  status, 
        online_duration,  created_by,  updated_by
      ) VALUES (
        '0196807b-8fdb-7604-aa2b-378b04169d4a',
        'huythuan',
        'Huy Thuan',
        'Nguyen',
        'huythuancv@phanmemmkt.vn',
        '',
        '',
       '2025-05-02 07:29:03.42+00',
        '$argon2id$v=19$m=65536,t=3,p=4$oA9qUx7hJL0jFBrcyeP5nw$bTFEW5+jJ9se25Vnj10FXSmCnUPHu0gzYg9jj4hwzrs',
        'Hello, I''m Huy Thuan',
        '{"url": ""}',
        0,
        true,
        '',
        '',
        '',
        false,
        'inactive',
        0,
        'system',
        'system'
      );
    `);
    await queryRunner.query(`
      INSERT INTO public.users_roles (user_id, role_id) VALUES
      ('0196807b-8fdb-7604-aa2b-378b04169d4a', '0196807b-90f4-763e-8a1e-783d186043b1')
    `);

    await queryRunner.query(`
  
  INSERT INTO public.permissions (id, slug, description, "group", active,  created_by,  updated_by) VALUES 
('0196807b-9030-779b-a8f5-1bf9708bf2f9', 'admin.access.permissions.read', 'Xem quyền', 'Quản trị quyền', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-1d5f7f74860d', 'admin.access.permissions.create', 'Tạo quyền', 'Quản trị quyền', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-21b8edbaf874', 'admin.access.permissions.update', 'Sửa quyền', 'Quản trị quyền', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-25e2de4b4994', 'admin.access.permissions.delete', 'Xóa quyền', 'Quản trị quyền', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-29ee45ab87d6', 'admin.access.roles.read', 'Xem vai trò', 'Quản trị vai trò', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-2c0930326811', 'admin.access.roles.create', 'Tạo vai trò', 'Quản trị vai trò', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-31e2158e6157', 'admin.access.roles.update', 'Sửa vai trò', 'Quản trị vai trò', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-35f637109c69', 'admin.access.roles.delete', 'Xóa vai trò', 'Quản trị vai trò', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-3bfeffff1472', 'admin.courses.read', 'Xem khóa học', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-3f9c8e6eb11c', 'admin.courses.create', 'Tạo khóa học', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-42a1997c5c96', 'admin.courses.update', 'Sửa khóa học', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-46774df0677e', 'admin.courses.delete', 'Xóa khóa học', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-49823f7e79ea', 'admin.course_enrolled.read', 'Xem khóa học đăng ký', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-4e92ce2e3056', 'admin.course_enrolled.create', 'Tạo khóa học đăng ký', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-53721485e9a9', 'admin.course_enrolled.update', 'Sửa khóa học đăng ký', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-55f850a65a2d', 'admin.course_enrolled.delete', 'Xóa khóa học đăng ký', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-5bd18b7adc14', 'admin.prices.read', 'Xem giá bán', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-5d0978fa64e4', 'admin.prices.create', 'Tạo giá bán', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-620589a3ae7d', 'admin.prices.update', 'Sửa giá bán', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-6444bdb042c8', 'admin.prices.delete', 'Xóa giá bán', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-684a2737574f', 'admin.chapters.read', 'Xem chương', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-6fac27ad1083', 'admin.chapters.create', 'Tạo chương', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-73c52615137b', 'admin.chapters.update', 'Sửa chương', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-76e56b5375fa', 'admin.chapters.delete', 'Xóa chương', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-7a9c02066495', 'admin.lessons.read', 'Xem bài giảng', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-7dd259cd1c29', 'admin.lessons.create', 'Tạo bài giảng', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-8124a3692ad2', 'admin.lessons.update', 'Sửa bài giảng', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-87f721155d24', 'admin.lessons.delete', 'Xóa bài giảng', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-884101b020b5', 'admin.discussions.read', 'Xem thảo luận', 'Hỗ trợ người dùng', true, 'system',  'system'),
('0196807b-9030-779b-a8f5-8c1626ed8d82', 'admin.discussions.create', 'Tạo thảo luận', 'Hỗ trợ người dùng', true, 'system',  'system'),
('0196807b-9031-7549-81e3-c6adddfe1f06', 'admin.discussions.update', 'Sửa thảo luận', 'Hỗ trợ người dùng', true, 'system',  'system'),
('0196807b-9031-7549-81e3-ca80e0b8775c', 'admin.discussions.delete', 'Xóa thảo luận', 'Hỗ trợ người dùng', true, 'system',  'system'),
('0196807b-9031-7549-81e3-cc925fc31e4c', 'admin.notes.read', 'Xem ghi chú', 'Khác', true, 'system',  'system'),
('0196807b-9031-7549-81e3-d237983d86d6', 'admin.notes.create', 'Tạo ghi chú', 'Khác', true, 'system',  'system'),
('0196807b-9031-7549-81e3-d5396a291e9f', 'admin.notes.update', 'Sửa ghi chú', 'Khác', true, 'system',  'system'),
('0196807b-9031-7549-81e3-dba7e55cdca3', 'admin.notes.delete', 'Xóa ghi chú','Khác',  true, 'system',  'system'),
('0196807b-9031-7549-81e3-dfb6f77bbb56', 'admin.lesson_progress.read', 'Xem tiến trình bài giảng','Khác',  true, 'system',  'system'),
('0196807b-9031-7549-81e3-e1b0fb164bb3', 'admin.lesson_progress.create', 'Tạo tiến trình bài giảng','Khác',  true, 'system',  'system'),
('0196807b-9031-7549-81e3-e714f90965d7', 'admin.lesson_progress.update', 'Sửa tiến trình bài giảng', 'Khác', true, 'system',  'system'),
('0196807b-9031-7549-81e3-e99d078d17d1', 'admin.lesson_progress.delete', 'Xóa tiến trình bài giảng','Khác',  true, 'system',  'system'),
('0196807b-9031-7549-81e3-efa6617fb24d', 'admin.assignments.read', 'Xem bài làm của học viên','Khác',  true, 'system',  'system'),
('0196807b-9031-7549-81e3-f038c3c0d3b3', 'admin.assignments.update', 'Sửa bài làm của học viên','Khác',  true, 'system',  'system'),
('0196807b-9031-7549-81e3-f624ad58bd8b', 'admin.rates.read', 'Xem rating', 'Quản trị khóa học',  true, 'system',  'system'),
('0196807b-9031-7549-81e3-fb75b81eef16', 'admin.rates.create', 'Tạo rating', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9031-7549-81e3-fcc8105b207c', 'admin.rates.update', 'Sửa rating', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9031-7549-81e4-03283ecc7b34', 'admin.rates.delete', 'Xóa rating', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9031-7549-81e4-059dfddcae50', 'admin.lecturers.read', 'Xem giảng viên', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9031-7549-81e4-084cc750c632', 'admin.lecturers.create', 'Tạo giảng viên', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9031-7549-81e4-0c21efc970c0', 'admin.lecturers.update', 'Sửa giảng viên', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9031-7549-81e4-138691aa491a', 'admin.lecturers.delete', 'Xóa giảng viên', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9031-7549-81e4-151f034a8df6', 'admin.course_codes.read', 'Xem mã khóa học', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9031-7549-81e4-1860b2ed0bc4', 'admin.course_codes.create', 'Tạo mã khóa học', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9031-7549-81e4-1cad72e0f179', 'admin.course_codes.update', 'Sửa mã khóa học', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9031-7549-81e4-218dab50168d', 'admin.course_codes.delete', 'Xóa mã khóa học', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9031-7549-81e4-24ece7f2c5a4', 'admin.course_combos.read', 'Xem combo khóa học', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9031-7549-81e4-28924f5566ad', 'admin.course_combos.create', 'Tạo combo khóa học', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9031-7549-81e4-2d0814282c87', 'admin.course_combos.update', 'Sửa combo khóa học', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9031-7549-81e4-330609e701ff', 'admin.course_combos.delete', 'Xóa combo khóa học', 'Quản trị khóa học', true, 'system',  'system'),
('0196807b-9031-7549-81e4-34747a2da913', 'admin.student_report.read', 'Xem thông tin học viên', 'Quản trị học viên', true, 'system',  'system'),
('0196807b-9031-7549-81e4-38ed7cb73e90', 'admin.reviews.read', 'Xem đánh giá', 'Đánh giá học viên', true, 'system',  'system'),
('0196807b-9031-7549-81e4-3d8fda44a520', 'admin.reviews.create', 'Tạo đánh giá', 'Đánh giá học viên', true, 'system',  'system'),
('0196807b-9031-7549-81e4-4105818b9e90', 'admin.reviews.update', 'Sửa đánh giá', 'Đánh giá học viên', true, 'system',  'system'),
('0196807b-9031-7549-81e4-46a210fd1ea2', 'admin.reviews.delete', 'Xóa đánh giá','Khác', true, 'system', 'system'),
('0196807b-9031-7549-81e4-4a929b38f7a4', 'admin.users.read', 'Xem người dùng', 'Khác', true, 'system',  'system'),
('0196807b-9031-7549-81e4-4c08d061f400', 'admin.users.create', 'Tạo người dùng','Khác',  true, 'system',  'system'),
('0196807b-9031-7549-81e4-53f83ad76a8b', 'admin.users.update', 'Sửa người dùng','Khác',  true, 'system',  'system'),
('0196807b-9031-7549-81e4-56d264985007', 'admin.users.delete', 'Xóa người dùng','Khác',  true, 'system',  'system'),
('0196807b-9031-7549-81e4-59984b85f51e', 'admin.page_manager.read', 'Xem trang', 'Khác', true, 'system',  'system'),
('0196807b-9031-7549-81e4-5d75e079f028', 'admin.page_manager.create', 'Tạo trang','Khác',  true, 'system',  'system'),
('0196807b-9031-7549-81e4-615dcd93860d', 'admin.page_manager.update', 'Sửa trang', 'Khác', true, 'system',  'system'),
('0196807b-9031-7549-81e4-660444bbdc1e', 'admin.page_manager.delete', 'Xóa trang', 'Khác', true, 'system',  'system'),
('0196807b-9031-7549-81e4-696ac40d9df2', 'admin.dashboards.read', 'Xem báo cáo', 'Khác', true, 'system',  'system'),
('0196807b-9031-7549-81e4-6e57536d3561', 'admin.questions.read', 'Xem câu hỏi','Khác',  true, 'system',  'system'),
('0196807b-9031-7549-81e4-73109415b868', 'admin.questions.create', 'Tạo câu hỏi','Khác',  true, 'system',  'system'),
('0196807b-9031-7549-81e4-751903a93218', 'admin.questions.update', 'Sửa câu hỏi','Khác',  true, 'system',  'system'),
('0196807b-9031-7549-81e4-7ab175715741', 'admin.questions.delete', 'Xóa câu hỏi', 'Khác', true, 'system',  'system'),
('0196807b-9031-7549-81e4-7d523f2ee012', 'admin.labels.read', 'Xem nhãn','Khác',  true, 'system',  'system'),
('0196807b-9031-7549-81e4-830bc7a7dd2d', 'admin.labels.create', 'Tạo nhãn','Khác', true, 'system',  'system'),
('0196807b-9031-7549-81e4-859adc2cb938', 'admin.labels.update', 'Sửa nhãn','Khác',  true, 'system',  'system'),
('0196807b-9031-7549-81e4-8ada091aaf5d', 'admin.labels.delete', 'Xóa nhãn', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-8fe0f8b6953e', 'admin.topic_sets.read', 'Xem bộ đề', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-90aff9a6b220', 'admin.topic_sets.create', 'Tạo bộ đề', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-9517c8dcd503', 'admin.topic_sets.update', 'Sửa bộ đề', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-9a8c7a8473e0', 'admin.topic_sets.delete', 'Xóa bộ đề', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-9cf02fb5bddf', 'admin.surveys.read', 'Xem khảo sát', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-a1cd33198cb1', 'admin.surveys.create', 'Tạo khảo sát', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-a581749b15ef', 'admin.surveys.update', 'Sửa khảo sát', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-a8f28389f334', 'admin.surveys.delete', 'Xóa khảo sát', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-ad9900f9582a', 'admin.tags.read', 'Xem tag', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-b215a027802d', 'admin.tags.create', 'Tạo tag', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-b50fa08e475e', 'admin.tags.update', 'Sửa tag', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-ba39b54698b2', 'admin.tags.delete', 'Xóa tag', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-bd428445f6ef', 'admin.topics.read', 'Xem chủ đề', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-c29fdfa98f05', 'admin.topics.create', 'Tạo chủ đề', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-c5aed61e5cff', 'admin.topics.update', 'Sửa chủ đề', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-ca48e4b0ea41', 'admin.topics.delete', 'Xóa chủ đề', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-cc2bccc60171', 'admin.blogs.read', 'Xem blog', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-d0606c61d8b4', 'admin.blogs.create', 'Tạo blog', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-d5551c9e0d87', 'admin.blogs.update', 'Sửa blog', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-db7b456da1e7', 'admin.blogs.delete', 'Xóa blog', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9031-7549-81e4-dd60f2e35d0c', 'admin.settings.read', 'Xem cài đặt', 'Cài đặt hệ thống', true, 'system',  'system'),
('0196807b-9031-7549-81e4-e20cdb6403bf', 'admin.settings.update', 'Sửa cài đặt', 'Cài đặt hệ thống', true, 'system',  'system'),
('0196807b-9031-7549-81e4-e7f8518870a7', 'admin.orders.read', 'Xem đơn hàng', 'Quản trị đơn hàng', true, 'system',  'system'),
('0196807b-9032-727d-aa8f-e3fe2142c21d', 'admin.orders.create', 'Tạo đơn hàng', 'Quản trị đơn hàng', true, 'system',  'system'),
('0196807b-9032-727d-aa8f-e63caedc0b73', 'admin.orders.update', 'Sửa đơn hàng', 'Quản trị đơn hàng', true, 'system',  'system'),
('0196807b-9032-727d-aa8f-eb630acc6ca6', 'admin.orders.delete', 'Xóa đơn hàng', 'Quản trị đơn hàng', true, 'system',  'system'),
('0196807b-9032-727d-aa8f-ef7c8aeae0b8', 'admin.certificates.read', 'Xem mẫu chứng chỉ', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9032-727d-aa8f-f0593d2bf7df', 'admin.certificates.create', 'Tạo mẫu chứng chỉ', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9032-727d-aa8f-f52e98162900', 'admin.certificates.update', 'Sửa mẫu chứng chỉ', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9032-727d-aa8f-f84a93ac93c8', 'admin.certificates.delete', 'Xóa mẫu chứng chỉ', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9032-727d-aa8f-fe51faee4ee9', 'admin.certificates_issued.read', 'Xem chứng chỉ', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9032-727d-aa90-034e91dcce03', 'admin.certificates_issued.create', 'Tạo chứng chỉ', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9032-727d-aa90-06793fb913df', 'admin.certificates_issued.update', 'Sửa chứng chỉ', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9032-727d-aa90-0a8f50b8efa2', 'admin.certificates_issued.delete', 'Xóa chứng chỉ', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9032-727d-aa90-0db6bbc9f030', 'admin.agency_package_order.read', 'Xem đơn hàng', 'Quản trị đại lý',  true, 'system',  'system'),
('0196807b-9032-727d-aa90-12240724923e', 'admin.agency_package_order.create', 'Tạo đơn hàng', 'Quản trị đại lý', true, 'system',  'system'),
('0196807b-9032-727d-aa90-142a62bb59be', 'admin.agency_package_order.update', 'Sửa đơn hàng', 'Quản trị đại lý', true, 'system',  'system'),
('0196807b-9032-727d-aa90-185d41ff83d2', 'admin.file_management.read', 'Đọc file', 'Quản trị nội dung',  true, 'system',  'system'),
('0196807b-9032-727d-aa90-1f1d4be99400', 'admin.file_management.create', 'Tạo file', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9032-727d-aa90-2043b38c7058', 'admin.file_management.update', 'Sửa file', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9032-727d-aa90-266d5b187f3b', 'admin.file_management.delete', 'Xóa file', 'Quản trị nội dung', true, 'system',  'system'),
('0196807b-9032-727d-aa90-2b3b816ab2e1', 'admin.agency.read', 'Xem Đại lý', 'Quản trị đại lý', true, 'system',  'system'),
('0196807b-9032-727d-aa90-2def1013ff7f', 'admin.agency.create', 'Tạo Đại lý', 'Quản trị đại lý', true, 'system',  'system'),
('0196807b-9032-727d-aa90-324cbe6b2201', 'admin.agency.update', 'Sửa Đại lý', 'Quản trị đại lý', true, 'system',  'system'),
('0196807b-9032-727d-aa90-35d1ed1055dc', 'admin.agency.delete', 'Xóa Đại lý', 'Quản trị đại lý', true, 'system',  'system'),
('0196807b-9032-727d-aa90-3b7458a89051', 'admin.agency_package.read', 'Xem gói đại lý', 'Quản trị đại lý', true, 'system',  'system'),
('0196807b-9032-727d-aa90-3c2b78ca8827', 'admin.agency_package.create', 'Tạo gói đại lý', 'Quản trị đại lý', true, 'system',  'system'),
('0196807b-9032-727d-aa90-40c401b73730', 'admin.agency_package.update', 'Sửa gói đại lý', 'Quản trị đại lý', true, 'system',  'system'),
('0196807b-9032-727d-aa90-46349d945c1d', 'admin.agency_package.delete', 'Xóa gói đại lý', 'Quản trị đại lý', true, 'system',  'system'),
('0196807b-9032-727d-aa90-4bfddeaa2736', 'admin.quiz.read', 'Xem gói trắc nghiệm', 'Quản trị trắc nghiệm', true, 'system',  'system'),
('0196807b-9032-727d-aa90-4c984745e9d2', 'admin.quiz.create', 'Tạo gói trắc nghiệm', 'Quản trị trắc nghiệm', true, 'system',  'system'),
('0196807b-9032-727d-aa90-5107706ecf6d', 'admin.quiz.update', 'Sửa gói trắc nghiệm', 'Quản trị trắc nghiệm', true, 'system',  'system'),
('0196807b-9032-727d-aa90-579f516477b2', 'admin.quiz.delete', 'Xóa gói trắc nghiệm', 'Quản trị trắc nghiệm', true, 'system',  'system'),
('0196807b-9032-727d-aa90-5961b2bccec3', 'admin.promo_code.read', 'Xem mã khuyến mãi', 'Quản trị mã khuyến mãi', true, 'system',  'system'),
('0196807b-9032-727d-aa90-5c908e946d24', 'admin.promo_code.create', 'Tạo mã khuyến mãi', 'Quản trị mã khuyến mãi', true, 'system',  'system'),
('0196807b-9032-727d-aa90-62a3a3a1662c', 'admin.promo_code.update', 'Sửa mã khuyến mãi', 'Quản trị mã khuyến mãi', true, 'system',  'system'),
('0196807b-9032-727d-aa90-65a4fcec0cd2', 'admin.promo_code.delete', 'Xóa mã khuyến mãi', 'Quản trị mã khuyến mãi', true, 'system',  'system'),
('0196807b-9032-727d-aa90-6bf404bc067d', 'admin.affiliate.read', 'Xem tiếp thị liên kết', 'Quản trị tiếp thị liên kết', true, 'system',  'system'),
('0196807b-9032-727d-aa90-6eb7da9411a3', 'admin.affiliate.create', 'Tạo tiếp thị liên kết', 'Quản trị tiếp thị liên kết', true, 'system',  'system'),
('0196807b-9032-727d-aa90-715064ef3944', 'admin.affiliate.update', 'Sửa tiếp thị liên kết', 'Quản trị tiếp thị liên kết', true, 'system',  'system'),
('0196807b-9032-727d-aa90-7710582aa2f6', 'admin.affiliate.delete', 'Xóa tiếp thị liên kết', 'Quản trị tiếp thị liên kết', true, 'system',  'system');
`);

    await queryRunner.query(`
          INSERT INTO public.roles_permissions (role_id, permission_id)
    VALUES
    ( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-1bf9708bf2f9'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-1d5f7f74860d'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-21b8edbaf874'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-25e2de4b4994'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-29ee45ab87d6'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-2c0930326811'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-31e2158e6157'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-35f637109c69'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-3bfeffff1472'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-3f9c8e6eb11c'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-42a1997c5c96'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-46774df0677e'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-49823f7e79ea'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-4e92ce2e3056'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-53721485e9a9'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-55f850a65a2d'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-5bd18b7adc14'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-5d0978fa64e4'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-620589a3ae7d'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-6444bdb042c8'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-684a2737574f'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-6fac27ad1083'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-73c52615137b'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-76e56b5375fa'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-7a9c02066495'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-7dd259cd1c29'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-8124a3692ad2'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-87f721155d24'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-884101b020b5'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9030-779b-a8f5-8c1626ed8d82'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e3-c6adddfe1f06'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e3-ca80e0b8775c'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e3-cc925fc31e4c'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e3-d237983d86d6'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e3-d5396a291e9f'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e3-dba7e55cdca3'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e3-dfb6f77bbb56'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e3-e1b0fb164bb3'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e3-e714f90965d7'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e3-e99d078d17d1'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e3-efa6617fb24d'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e3-f038c3c0d3b3'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e3-f624ad58bd8b'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e3-fb75b81eef16'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e3-fcc8105b207c'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-03283ecc7b34'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-059dfddcae50'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-084cc750c632'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-0c21efc970c0'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-138691aa491a'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-151f034a8df6'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-1860b2ed0bc4'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-1cad72e0f179'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-218dab50168d'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-24ece7f2c5a4'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-28924f5566ad'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-2d0814282c87'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-330609e701ff'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-34747a2da913'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-38ed7cb73e90'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-3d8fda44a520'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-4105818b9e90'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-46a210fd1ea2'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-4a929b38f7a4'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-4c08d061f400'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-53f83ad76a8b'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-56d264985007'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-59984b85f51e'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-5d75e079f028'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-615dcd93860d'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-660444bbdc1e'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-696ac40d9df2'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-6e57536d3561'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-73109415b868'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-751903a93218'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-7ab175715741'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-7d523f2ee012'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-830bc7a7dd2d'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-859adc2cb938'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-8ada091aaf5d'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-8fe0f8b6953e'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-90aff9a6b220'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-9517c8dcd503'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-9a8c7a8473e0'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-9cf02fb5bddf'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-a1cd33198cb1'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-a581749b15ef'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-a8f28389f334'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-ad9900f9582a'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-b215a027802d'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-b50fa08e475e'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-ba39b54698b2'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-bd428445f6ef'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-c29fdfa98f05'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-c5aed61e5cff'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-ca48e4b0ea41'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-cc2bccc60171'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-d0606c61d8b4'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-d5551c9e0d87'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-db7b456da1e7'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-dd60f2e35d0c'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-e20cdb6403bf'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9031-7549-81e4-e7f8518870a7'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa8f-e3fe2142c21d'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa8f-e63caedc0b73'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa8f-eb630acc6ca6'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa8f-ef7c8aeae0b8'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa8f-f0593d2bf7df'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa8f-f52e98162900'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa8f-f84a93ac93c8'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa8f-fe51faee4ee9'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-034e91dcce03'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-06793fb913df'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-0a8f50b8efa2'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-0db6bbc9f030'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-12240724923e'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-142a62bb59be'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-185d41ff83d2'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-1f1d4be99400'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-2043b38c7058'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-266d5b187f3b'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-2b3b816ab2e1'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-2def1013ff7f'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-324cbe6b2201'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-35d1ed1055dc'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-3b7458a89051'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-3c2b78ca8827'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-40c401b73730'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-46349d945c1d'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-4bfddeaa2736'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-4c984745e9d2'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-5107706ecf6d'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-579f516477b2'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-5961b2bccec3'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-5c908e946d24'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-62a3a3a1662c'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-65a4fcec0cd2'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-6bf404bc067d'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-6eb7da9411a3'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-715064ef3944'),
( '0196807b-90f4-763e-8a1e-783d186043b1','0196807b-9032-727d-aa90-7710582aa2f6');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
