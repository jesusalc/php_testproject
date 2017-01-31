/*
 Navicat PostgreSQL Data Transfer

 Source Server         : localhost
 Source Server Version : 90502
 Source Host           : localhost
 Source Database       : postmail
 Source Schema         : admin

 Target Server Version : 90502
 File Encoding         : utf-8

 Date: 01/31/2017 15:19:56 PM
*/

-- ----------------------------
--  Table structure for delivery_times
-- ----------------------------
DROP TABLE IF EXISTS "admin"."delivery_times";
CREATE TABLE "admin"."delivery_times" (
	"origin_delivery" varchar COLLATE "default",
	"target_delivery" varchar COLLATE "default",
	"days" varchar COLLATE "default",
	"id" varchar COLLATE "default",
	"internal_id" int4 NOT NULL DEFAULT nextval('delivery_times_internal_id_seq'::regclass)
)
WITH (OIDS=FALSE);
ALTER TABLE "admin"."delivery_times" OWNER TO "postgres";

-- ----------------------------
--  Primary key structure for table delivery_times
-- ----------------------------
ALTER TABLE "admin"."delivery_times" ADD PRIMARY KEY ("internal_id") NOT DEFERRABLE INITIALLY IMMEDIATE;

