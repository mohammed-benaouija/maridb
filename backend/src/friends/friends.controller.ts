
import { Controller, Post, Param, UseGuards, Request, NotFoundException, Get, ParseIntPipe } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // You may need authentication to ensure the user is logged in

@Controller('friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

//   @UseGuards(JwtAuthGuard) // Use a guard to ensure the user is authenticated
@Post('send-request/:friendId/:id')
// @UseGuards(AuthGuard('jwt'))
async sendFriendRequest(
  @Param('friendId') friendId: number,
  @Param('id') id: number,
  @Request() req, // Use Request to access the user from the request object
): Promise<void> {
  
  const userId = id;
  console.log(userId) // Assuming you have stored user information in the request object during authentication
  await this.friendsService.sendFriendRequest(Number(userId), Number(friendId));
}
@Post('accept-friend-request/:requestId/:id')
  async acceptFriendRequest(@Param('requestId') requestId: number,  @Param('id') id: number) {
    try {
      await this.friendsService.acceptFriendRequest(Number(requestId),Number(id));
      
      return { message: 'Friend request accepted successfully' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      // Handle other potential errors
    }
  }
  @Post('refuse-friend-request/:requestId')
  async refuseFriendRequest(@Param('requestId') requestId: number) {
    try {
      await this.friendsService.refuseFriendRequest(requestId);
      return { message: 'Friend request refused successfully' };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      // Handle other potential errors
    }
  }
  @Get('accepted-friends/:userId')
  async getAcceptedFriends(
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    const friends = await this.friendsService.findFriendsByStatus(
      userId,
      'accepted',
    );
    return friends;
  }
  @Get(':userId/received-requests')
  async getReceivedFriendRequests(@Param('userId') userId: number) {
    return this.friendsService.getReceivedFriendRequests(userId);
  }

}
