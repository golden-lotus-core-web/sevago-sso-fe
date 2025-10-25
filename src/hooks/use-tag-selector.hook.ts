import { useCallback, useEffect, useState } from 'react'; 
import { getErrorMessage } from '../common/utils/string.utils';
import { SnackbarType, useSnackbar } from './use-snackbar.hook';

export interface TaggedUser {
  id: string;
  name: string;
  url: string;
}

interface TagPosition {
  start: number;
  end: number;
}

interface UseTagSelectorReturn {
  showTagSelector: boolean;
  tagPosition: TagPosition | null;
  searchQuery: string;
  filteredUsers: TaggedUser[];
  selectedUserIndex: number;
  users: TaggedUser[];
  handleInputChange: (newValue: string) => void;
  // handleKeyDown: (e: React.KeyboardEvent) => { newValue: string; newTag: DiscussionTag } | null;
  // selectTagUser: (user: TaggedUser) => { newValue: string; newTag: DiscussionTag };
  // handleAllTag: () => { newValue: string; newTag: DiscussionTag };
  resetTagSelector: () => void;
  resetAll: () => void;
  setSearchQuery: (query: string) => void;
  taggedUserIds: Set<string>; // Thêm danh sách user đã tag
  removeTaggedUser: (userId: string) => void;
}

export const useTagSelector = (movementId: string): UseTagSelectorReturn => {
  const [showTagSelector, setShowTagSelector] = useState(false);
  const [tagPosition, setTagPosition] = useState<TagPosition | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState<TaggedUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<TaggedUser[]>([]);
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);
  const [taggedUserIds, setTaggedUserIds] = useState<Set<string>>(new Set()); // Track những user đã được tag
  const { showSnackbar } = useSnackbar();

  // Fetch users for tagging
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await getUserMovementIdUser(movementId);
  //       setUsers(response);
  //     } catch (error) {
  //       showSnackbar({ message: getErrorMessage(error), type: SnackbarType.ERROR });
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  // Filter users based on search query, loại bỏ những user đã được tag
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = users
        .filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter((user) => !taggedUserIds.has(user.id)); // Chỉ hiển thị user chưa được tag
      setFilteredUsers(filtered);
      setSelectedUserIndex(0);
    } else {
      const availableUsers = users.filter((user) => !taggedUserIds.has(user?.id)); // Chỉ hiển thị user chưa được tag
      setFilteredUsers(availableUsers);
      setSelectedUserIndex(0);
    }
  }, [searchQuery, users, taggedUserIds]);

  // Handle input change and detect @ symbol
  const handleInputChange = useCallback((newValue: string) => {
    if (newValue?.trim() === '') {
      resetAll();
      return;
    }
    const lastAtSymbol = newValue?.lastIndexOf('@');
    if (lastAtSymbol !== -1) {
      const afterAt = newValue?.substring(lastAtSymbol + 1);
      const spaceIndex = afterAt?.indexOf(' ');

      if (spaceIndex === -1) {
        // Still typing the tag
        setSearchQuery(afterAt);
        setTagPosition({ start: lastAtSymbol, end: lastAtSymbol + afterAt.length + 1 });
        setShowTagSelector(true);
        return;
      }
    }

    setShowTagSelector(false);
    setTagPosition(null);
  }, []);

  // Reset tag selector
  const resetTagSelector = useCallback(() => {
    setShowTagSelector(false);
    setTagPosition(null);
    setSearchQuery('');
  }, []);

  // Select a user and insert tag
  // const selectTagUser = useCallback(
  //   (user: TaggedUser) => {
  //     if (!tagPosition) {
  //       return { newValue: '', newTag: {} as DiscussionTag };
  //     }

  //     // Create tag data
  //     const newTag: DiscussionTag = {
  //       userId: user.id,
  //       type: DiscussionTagType.USER,
  //       index: tagPosition.start,
  //       length: user.name.length + 1, // +1 for @ symbol
  //     };

  //     // Thêm user vào danh sách đã tag TRƯỚC KHI reset
  //     setTaggedUserIds((prev) => new Set([...prev, user.id]));

  //     // Reset tag selector SAU KHI đã cập nhật taggedUserIds
  //     resetTagSelector();

  //     return { newValue: `@${user.name} `, newTag };
  //   },
  //   [tagPosition, resetTagSelector],
  // );

  // Handle special tag @all
  // const handleAllTag = useCallback(() => {
  //   if (!tagPosition) {
  //     return { newValue: '', newTag: {} as DiscussionTag };
  //   }

  //   // Create @all tag
  //   const newTag: DiscussionTag = {
  //     type: DiscussionTagType.ALL,
  //     index: tagPosition.start,
  //     length: 4, // @all
  //   };

  //   // Reset tag selector SAU KHI đã tạo tag
  //   resetTagSelector();

  //   return { newValue: '@all ', newTag };
  // }, [tagPosition, resetTagSelector]);

  // Handle key navigation in tag selector
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!showTagSelector) return null;

      // Tính tổng số options (bao gồm @all + users)
      const totalOptions = filteredUsers.length + 1; // +1 for @all option

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedUserIndex((prev) => {
            if (totalOptions === 0) return 0;
            return prev < totalOptions - 1 ? prev + 1 : 0;
          });
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedUserIndex((prev) => {
            if (totalOptions === 0) return 0;
            return prev > 0 ? prev - 1 : totalOptions - 1;
          });
          break;
        case 'Enter':
        case 'Tab':
          e.preventDefault();
          if (totalOptions === 0) return null;

          // if (selectedUserIndex === 0) {
          //   // Chọn @all
          //   const result = handleAllTag();
          //   resetTagSelector();
          //   return result;
          // } else if (selectedUserIndex > 0 && selectedUserIndex <= filteredUsers.length) {
          //   // Chọn user (index - 1 vì index 0 là @all)
          //   const userIndex = selectedUserIndex - 1;
          //   if (filteredUsers[userIndex]) {
          //     const result = selectTagUser(filteredUsers[userIndex]);
          //     resetTagSelector();
          //     return result;
          //   }
          // }
          break;
        case 'Escape':
          resetTagSelector();
          break;
      }
      return null;
    },
    [showTagSelector, filteredUsers, selectedUserIndex, resetTagSelector],
  );

  // Reset hoàn toàn để có thể tag lại
  const resetAll = useCallback(() => {
    setShowTagSelector(false);
    setTagPosition(null);
    setSearchQuery('');
    setTaggedUserIds(new Set()); // Reset danh sách user đã tag
  }, []);

  const removeTaggedUser = useCallback(
    (userId: string) => {
      setTaggedUserIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(userId);
        return newSet;
      });
    },
    [taggedUserIds],
  );

  return {
    showTagSelector,
    tagPosition,
    searchQuery,
    filteredUsers,
    selectedUserIndex,
    users,
    handleInputChange,
    // handleKeyDown,
    // selectTagUser,
    // handleAllTag,
    resetTagSelector,
    resetAll,
    removeTaggedUser,
    setSearchQuery,
    taggedUserIds, // Export để component cha có thể biết những user nào đã được tag
  };
};
