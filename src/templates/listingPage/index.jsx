import React from 'react';
import { connect } from 'react-redux';
import Meta from 'atoms/meta';
import Shell from 'organisms/shell';
import SnippetList from 'organisms/snippetList';
import PropTypes from 'prop-types';
import {
  Paginator as PaginatorPropType,
  Snippet as SnippetPropType
} from 'typedefs';
import { pushNewPage } from 'state/navigation';
import _ from 'lang';
const _l = _('en');

const ListingPage = ({
  pageContext: {
    logoSrc,
    paginator,
    snippetList,
  },
  dispatch,
}) => {
  React.useEffect(() => {
    dispatch(pushNewPage('Snippet List', `${paginator.baseUrl}/p/${paginator.pageNumber}`));
  }, []);

  return (
    <>
      <Meta
        logoSrc={ logoSrc }
        title={ _l('Snippet list') }
      />
      <Shell
        logoSrc={ logoSrc }
        isSearch={ false }
        isList={ true }
        withIcon={ true }
        withTitle={ true }
      >
        <SnippetList
          snippetList={ snippetList }
          paginator={ paginator }
        />
      </Shell>
    </>
  );
};

ListingPage.propTypes = {
  /** pageContext is passed from Gatsby to the page */
  pageContext: PropTypes.shape({
    /** URI for the logo image */
    logoSrc: PropTypes.string.isRequired,
    /** Paginator component data */
    paginator: PaginatorPropType,
    /** List of snippets to be displayed */
    snippetList: PropTypes.arrayOf(SnippetPropType),
  }),
  /** Dispatch function of the Redux stotre */
  dispatch: PropTypes.func,
};

export default connect(
  state => ({}),
  null
)(ListingPage);
