package com.example.springback.mapper;

import com.example.springback.entity.Account;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface AccountMapper {
    @Select("select * from account where account_name = #{text} or email = #{text}")
    Account findUserByUsernameOrEmail(String text);
}
