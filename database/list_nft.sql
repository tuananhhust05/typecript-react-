PGDMP                         z            manage_ver1_lms    14.3    14.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24591    manage_ver1_lms    DATABASE     s   CREATE DATABASE manage_ver1_lms WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE manage_ver1_lms;
                postgres    false            �            1259    32768    list_nft    TABLE     `   CREATE TABLE public.list_nft (
    link_access text NOT NULL,
    address text,
    abi json
);
    DROP TABLE public.list_nft;
       public         heap    postgres    false            �          0    32768    list_nft 
   TABLE DATA           =   COPY public.list_nft (link_access, address, abi) FROM stdin;
    public          postgres    false    209   Q       g           2606    32774    list_nft list_nft_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.list_nft
    ADD CONSTRAINT list_nft_pkey PRIMARY KEY (link_access);
 @   ALTER TABLE ONLY public.list_nft DROP CONSTRAINT list_nft_pkey;
       public            postgres    false    209            �   0  x���n�0E��+��QD�]ʮ��B�$n��-�����QS)��T��m����3�&���8R�e�&�������i캮?�lw�͜�w�����˷����ѳ��H �d�
�4��b��c�UF�	t�SV1����)+kH�$�-)A8�)8��sA�)���Tډt�ʉЪ���e
{֪��p�W�r��ڎ�F����g1�	�oPCH )��{�+]���z[��'_F���{��~��XF%OkaO�?����&���y��`;�j߀V;!�ÛJi��J��o���,�`b�'kPM�     