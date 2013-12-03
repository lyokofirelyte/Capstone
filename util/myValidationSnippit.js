
function validEmail(emailAddressToCheck)
{
	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	
	// regular expression explanation
	//
	// needs to change to accommodate the new domain names that will be available in the not 
	// too distant future
	//
	// regular expression values always begin with a /
	// ^ means the pattern must begin with the first character in the string
	// \w matches one non-whitespace character [a-zA-z0-9_]
	// + previous item can occur one or more times, so there must be at least one 
	//		character before the first period or hyphen or the at sign, although there can be many more
	//
	// ([\.-]?\w+) information inside parenthesis is a group
	//		this group matches the characters between the first word and the at sign
	// [\.-] matches a period or a hyphen
	// ? means that the period or hyphen is optional
	// \w+ matches at least one non-whitespace
	// * means that the entire group is optional
	//
	// @ matches an at sign (there must be one and only one in the address)
	//
	// \w+ matches at least one non-whitespace
	//
	// ([\.-]?\w+)* is another optional group that matches an optional period or hyphen followed by
	//			at least one non-whitespace
	//
	// (\.\w{2,3}) is a group that matches the last part of the email address
	//		\. matches a period
	//		\w{2,3} matches either 2 non-whitespace characters or 3 non-whitespace characters
	//		+ means the group must occur at least one time, so the address has to end with a period
	//		followed by a 2 or 3 character organization name
	//
	// $ means there cannot be another characters in the string that are not matched (garbage at the end of the string)
	// / ends the regular expression (optional control characters can be coded, but aren't needed in this case)

	
	// test method of the regular expression object returns true if the string
	// matches the pattern
	
	if (re.test(emailAddressToCheck))
		return(true)
	else	
		return(false);

}
